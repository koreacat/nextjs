import { useEffect, useRef } from 'react';
import {
  AddAnimationProps,
  ApplyAnimationStyleProps,
  ApplyAnimationStylesProps,
  ApplyInitStyleProps,
  ApplyStyleProps,
  Easing,
  AnimationData,
  InitData,
} from './data';

const isAmong = (pos: number, top: number, bottom: number) => pos >= top && pos <= bottom;

// TODO 역재생, 자동 기준점, ADD Class 로직 추가

export const useScrollAnimation = () => {
  const refs = useRef<Record<string, HTMLElement>>({});
  const initDataRecord: Record<string, InitData> = {};
  const animationDataRecord: Record<string, AnimationData[]> = {};

  useEffect(() => {
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;
    console.log(currentPos);

    for (const key in initDataRecord) {
      const initData = initDataRecord[key];
      const animationDataArr = animationDataRecord[key];
      const ref = refs.current[key];
      const { top, bottom } = initData;

      if (!isAmong(currentPos, top, bottom)) applyInitStyle({ ref, initData, currentPos });
      else applyAnimationStyles({ ref, animationDataArr, currentPos });
    }
  };

  const applyInitStyle = ({ ref, initData, currentPos }: ApplyInitStyleProps) => {
    const { top, styles } = initData;
    for (const styleName in styles) {
      const { topValue, bottomValue, unit } = styles[styleName];
      const value = currentPos <= top ? topValue : bottomValue;
      applyStyle({ ref, styleName, value, unit });
    }
  };

  const applyAnimationStyles = ({ ref, animationDataArr, currentPos }: ApplyAnimationStylesProps) => {
    for (const animationData of animationDataArr) {
      const { top, bottom, styles, easing } = animationData;
      const rate = Easing[easing]((currentPos - top) / (bottom - top));

      for (const styleName in styles) {
        const styleValues = styles[styleName];
        applyAnimationStyle({ ref, styleName, styleValues, rate });
      }
    }
  };

  const applyAnimationStyle = ({ ref, styleName, styleValues, rate }: ApplyAnimationStyleProps) => {
    if (!styleValues) return;
    const { topValue, bottomValue, unit } = styleValues;

    if(typeof topValue === 'number' && typeof bottomValue === 'number') {
      const value = topValue + (bottomValue - topValue) * rate;
      applyStyle({ ref, styleName, value, unit });
    }
  };

  const applyStyle = ({ ref, styleName, value, unit = '' }: ApplyStyleProps) => {
    switch (styleName) {
      case 'translateX':
        ref.style.transform = `translateX(${value}${unit})`;
        break;
      case 'translateY':
        ref.style.transform = `translateY(${value}${unit})`;
        break;
      default:
        ref.style[styleName] = `${value}${unit}`;
        break;
    }
  };

  const addAnimation = ({ ref, initData, animationDataArr }: AddAnimationProps) => {
    const key = Math.random().toString(36);
    refs.current[key] = ref;
    initDataRecord[key] = initData;
    animationDataRecord[key] = animationDataArr;
  };

  return { addAnimation };
};
