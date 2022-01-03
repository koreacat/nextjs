import {useEffect, useRef} from "react";
import {
  AddAnimationProps,
  ApplyStylesProps,
  Easing,
  IAnimationData,
  IInitData,
} from "./data";

const isAmong = (pos, top, bottom) => pos >= top && pos <= bottom;

export const useScrollAnimation = () => {
  const refs = useRef<HTMLElement[]>([]);
  const initDataRecord: Record<string, IInitData> = {};
  const animationDataRecord: Record<string, IAnimationData[]> = {};

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll);
    return (() => window.removeEventListener("scroll", onScroll))
  }, []);

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;

    for (const key in initDataRecord) {
      const initData = initDataRecord[key];
      const animationData = animationDataRecord[key];
      const ref = refs.current[key];
      const {top, bottom} = initData;

      if(!isAmong(currentPos, top, bottom)) applyInitStyles(initData, ref, currentPos);
      else applyAnimationStyles(animationData, ref, currentPos);
    }
  };

  const applyInitStyles = (initData, ref, currentPos) => {
    const {top, styles} = initData;
    for (const styleName in styles) {
      const {topValue, bottomValue} = styles[styleName];
      const value = currentPos <= top ? topValue : bottomValue;
      applyStyle(ref, styleName, value);
    }
  };

  const applyAnimationStyles = (animations, ref, currentPos) => {
    for (const animation of animations) {
      const {top, bottom, styles, easing} = animation;
      const rate = Easing[easing]((currentPos - top) / (bottom - top));
      applyStyles({ref, styles, rate});
    }
  };

  // TODO value 가 number 가 아니면 value 와 unit 분리
  const applyStyles = ({ref, styles, rate}: ApplyStylesProps) => {
    for (const styleName in styles) {
      const {topValue, bottomValue} = styles[styleName];
      const calc = topValue + (bottomValue - topValue) * rate;
      applyStyle(ref, styleName, calc);
    }
  };

  const applyStyle = (element, styleName, value, unit = 'px') => {
    switch (styleName) {
      case 'translateX':
        element.style.transform = `translateX(${value}${unit})`;
        break;
      case 'translateY':
        element.style.transform = `translateY(${value}${unit})`;
        break;
      case 'width':
      case 'height':
        element.style[styleName] = `${value}${unit}`;
        break;
      default:
        element.style[styleName] = value;
        break;
    }
  };

  const addAnimation = ({ref, initData, animationData}: AddAnimationProps) => {
    const key = Math.random().toString(36);
    refs.current[key] = ref;
    initDataRecord[key] = initData;
    animationDataRecord[key] = animationData;
  };

  return {addAnimation};
};
