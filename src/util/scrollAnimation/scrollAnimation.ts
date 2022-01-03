import {useEffect, useRef} from "react";
import {
  AddAnimationProps,
  ApplyStylesProps,
  Easing,
  IAnimationData,
  IInitData,
} from "./data";

export const useScrollAnimation = () => {
  const refs = useRef<HTMLElement[]>([]);
  const initDataRecord: Record<string, IInitData> = {};
  const animationDataRecord: Record<string, IAnimationData[]> = {};

  const isAmong = (pos, top, bottom) => pos >= top && pos <= bottom;

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll);
    return (() => window.removeEventListener("scroll", onScroll))
  }, []);

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;

    for (const key in initDataRecord) {
      const {top, bottom, topStyle, bottomStyle} = initDataRecord[key];

      if (isAmong(currentPos, top, bottom)) {
        applyAnimationStyles(animationDataRecord[key], refs.current[key], currentPos);
      } else {
        const styles = currentPos <= top ? topStyle : bottomStyle;
        applyStyles({ref: refs.current[key], styles: styles});
      }
    }
  };

  const applyAnimationStyles = (animations, ref, currentPos) => {
    for (const animation of animations) {
      const {top, bottom, styles, easing} = animation;

      if (isAmong(currentPos, top, bottom)) {
        if (!animation.enabled) animation.enabled = true;
      } else if (!isAmong(currentPos, top, bottom) && animation.enabled) {

        if (currentPos <= top) applyStyles({isInit: false, ref, styles, rate: 0});
        else if (currentPos >= bottom) applyStyles({isInit: false, ref, styles, rate: 1});

        animation.enabled = false;
      }

      if (animation.enabled) {
        const rate = Easing[easing]((currentPos - top) / (bottom - top));
        applyStyles({isInit: false, ref, styles, rate});
      }
    }
  };


  const applyStyles = ({isInit = true, ref, styles, rate}: ApplyStylesProps) => {
    for (const style in styles) {
      const {topValue, bottomValue} = styles[style];
      const calc = topValue + (bottomValue - topValue) * rate;
      const value = isInit ? styles[style] : calc;
      applyStyle(ref, style, value);
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
