import {useEffect, useRef} from "react";
import {AddAnimationProps, EasingMap, IAnimationData, IInitData} from "./data";

const isAmong = (pos, top, bottom) => pos >= top && pos <= bottom;

export const useScrollAnimation = () => {
  const refs = useRef<HTMLElement[]>([]);
  const initDataRecord: Record<string, IInitData> = {};
  const animationDataRecord: Record<string, IAnimationData[]> = {};

  useEffect(() => {
    initAnimation();
    onScroll();

    window.addEventListener("scroll", onScroll);
    return (() => window.removeEventListener("scroll", onScroll))
  }, []);

  const initAnimation = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;

    for (const key in initDataRecord) {
      const {top, bottom, topStyle, bottomStyle} = initDataRecord[key];
      if (currentPos <= top) applyStyles(refs.current[key], topStyle);
      else if (currentPos >= bottom) applyStyles(refs.current[key], bottomStyle);
    }
  };

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;

    for (const key in initDataRecord) {
      const {top, bottom, topStyle, bottomStyle} = initDataRecord[key];

      // 범위 밖
      if (!isAmong(currentPos, top, bottom)) {
        if (currentPos <= top) applyStyles(refs.current[key], topStyle);
        else if (currentPos > bottom) applyStyles(refs.current[key], bottomStyle);
      }

      // 범위 내
      else {
        const animations = animationDataRecord[key];
        if (!animations) return;
        for (const animation of animations) {
          const {top: a_top, bottom: a_bottom, easing, styles} = animation;

          if (isAmong(currentPos, a_top, a_bottom)) {
            if (!animation.enabled) animation.enabled = true;
          } else if (!isAmong(currentPos, a_top, a_bottom) && animation.enabled) {
            if (currentPos <= a_top) {
              applyStyles(refs.current[key], styles, 0);
            } else if (currentPos >= a_bottom) {
              applyStyles(refs.current[key], styles, 1);
            }
            animation.enabled = false;
          }

          if (animation.enabled) {
            const r = EasingMap[easing]((currentPos - a_top) / (a_bottom - a_top));
            applyStyles(refs.current[key], styles, r);
          }
        }
      }


    }
  };


  const applyStyles = (ref, styles, rate?) => {
    for (const styleName in styles) {
      const {topValue, bottomValue} = styles[styleName];
      const calc = topValue + (bottomValue - topValue) * rate;

      if(rate === undefined) {
        applyStyle(ref, styleName, styles[styleName]);
      }

      applyStyle(ref, styleName, calc);
    }
  };

  const applyStyle = (element, styleName, value) => {
    const unit = 'px';

    if (styleName === "translateX") {
      element.style.transform = `translateX(${value}${unit})`;
      return;
    }
    if (styleName === "translateY") {
      element.style.transform = `translateY(${value}${unit})`;
      return;
    }
    if (styleName === "width" || "height") {
      element.style[styleName] = `${value}${unit}`;
    }

    element.style[styleName] = value;
  };

  const addAnimation = ({ref, initData, animationData}: AddAnimationProps) => {
    const key = Math.random().toString(36);
    refs.current[key] = ref;
    initDataRecord[key] = initData;
    animationDataRecord[key] = animationData;
  };

  return {addAnimation};
};
