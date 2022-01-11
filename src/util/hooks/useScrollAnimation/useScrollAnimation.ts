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
  AddClassProps,
  ClassData,
} from './data';

const isAmong = (pos: number, top: number, bottom: number) => pos >= top && pos < bottom;
const getKey = () => Math.random().toString(36);

// TODO 역재생 on/off
export const useScrollAnimation = () => {
  const refs = useRef<Record<string, HTMLElement>>({});
  const initDataRecord: Record<string, InitData> = {};
  const animationDataRecord: Record<string, AnimationData[]> = {};
  const classDataRecord: Record<string, ClassData> = {};

  useEffect(() => {
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const currentPos = window.pageYOffset || document.documentElement.scrollTop;
    handleClass(currentPos);
    handleStyle(currentPos);
  };

  const handleClass = (currentPos: number) => {
    for (const key in classDataRecord) {
      const classData = classDataRecord[key];
      const ref = refs.current[key];
      const { className } = classData;
      const { top, bottom, baseLineRef } = classData;
      const baseLine = baseLineRef ? -baseLineRef?.getBoundingClientRect().top : currentPos;

      if (isAmong(baseLine, top(), bottom())) ref.classList.add(className);
      else ref.classList.remove(className);
    }
  };

  const handleStyle = (currentPos: number) => {
    for (const key in initDataRecord) {
      const initData = initDataRecord[key];
      const animationDataArr = animationDataRecord[key];
      const ref = refs.current[key];
      const { top, bottom, baseLineRef, styles } = initData;
      const baseLine = baseLineRef ? -baseLineRef?.getBoundingClientRect().top : currentPos;

      if (!isAmong(baseLine, top(), bottom())) applyInitStyle({ ref, top, styles, baseLine });
      else applyAnimationStyles({ ref, animationDataArr, currentPos });
    }
  };

  const applyInitStyle = ({ ref, top, styles, baseLine }: ApplyInitStyleProps) => {
    for (const styleName in styles) {
      const styleValues = styles[styleName];

      if (styleValues) {
        const { topValue, bottomValue, unit } = styleValues;
        const value = baseLine <= top() ? topValue : bottomValue;
        applyStyle({ ref, styleName, value, unit });
      }
    }
  };

  const applyAnimationStyles = ({ ref, animationDataArr, currentPos }: ApplyAnimationStylesProps) => {
    for (const animationData of animationDataArr) {
      const { top, bottom, baseLineRef, styles, easing } = animationData;
      const baseLine = baseLineRef ? -baseLineRef?.getBoundingClientRect().top : currentPos;

      const rate = Easing[easing]((baseLine - top()) / (bottom() - top()));
      if (isAmong(baseLine, top(), bottom())) applyAnimationStyle({ ref, styles, rate });
    }
  };

  const applyAnimationStyle = ({ ref, styles, rate }: ApplyAnimationStyleProps) => {
    for (const styleName in styles) {
      const styleValues = styles[styleName];

      if (styleValues) {
        const { topValue, bottomValue, unit } = styleValues;

        if (typeof topValue === 'number' && typeof bottomValue === 'number') {
          const value = topValue + (bottomValue - topValue) * rate;
          applyStyle({ ref, styleName, value, unit });
        }
      }
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
    const key = getKey();
    refs.current[key] = ref;
    initDataRecord[key] = initData;
    animationDataRecord[key] = animationDataArr;
  };

  const addClass = ({ ref, classData }: AddClassProps) => {
    const key = getKey();
    refs.current[key] = ref;
    classDataRecord[key] = classData;
  };

  return { addAnimation, addClass };
};
