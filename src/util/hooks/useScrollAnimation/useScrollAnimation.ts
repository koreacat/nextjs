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
  ClassData, ApplyClassProps,
} from './data';

const isAmong = (pos: number, top: number, bottom: number) => pos >= top && pos <= bottom;
const getKey = () => Math.random().toString(36);

// TODO
// 1. 역재생 on/off
// 2. baseLine 자동 계산 on/off
export const useScrollAnimation = () => {
  const refs = useRef<Record<string, HTMLElement>>({});
  const initDataRecord: Record<string, InitData> = {};
  const animationDataRecord: Record<string, AnimationData[]> = {};
  const classDataRecord: Record<string, ClassData> ={};

  useEffect(() => {
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;
    console.log(currentPos);

    for(const key in classDataRecord) {
      const classData = classDataRecord[key];
      const ref = refs.current[key];
      applyClass({ref, classData, currentPos});
    }

    for (const key in initDataRecord) {
      const initData = initDataRecord[key];
      const animationDataArr = animationDataRecord[key];
      const ref = refs.current[key];
      const { top, bottom } = initData;

      if (!isAmong(currentPos, top, bottom)) applyInitStyle({ ref, initData, currentPos });
      else applyAnimationStyles({ ref, animationDataArr, currentPos });
    }
  };

  const applyClass = ({ref, classData, currentPos}: ApplyClassProps) => {
    const { className } = classData;
    const { top, bottom } = classData;
    if (isAmong(currentPos, top, bottom)) ref.classList.add(className);
    else ref.classList.remove(className);
  };

  const applyInitStyle = ({ ref, initData, currentPos }: ApplyInitStyleProps) => {
    console.log('init');
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

      if(isAmong(currentPos, top, bottom)) applyAnimationStyle({ ref, styles, rate });
    }
  };

  const applyAnimationStyle = ({ ref, styles, rate }: ApplyAnimationStyleProps) => {
    console.log('animation');
    for (const styleName in styles) {
      const styleValues = styles[styleName];

      if (styleValues) {
        const { topValue, bottomValue, unit } = styleValues;

        if(typeof topValue === 'number' && typeof bottomValue === 'number') {
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
