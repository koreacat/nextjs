import {useEffect, useRef} from "react";
import {EasingMap, IAnimationData, IInitData} from "./data";

interface AddAnimationProps {
  key: string,
  ref: HTMLDivElement,
  initData: IInitData,
  animationData: IAnimationData[]
}

export const useScrollAnimation = () => {
  const refs = useRef<HTMLElement[]>([]);
  const initDataMap: Record<string, IInitData> = {};
  const animationDataMap: Record<string, IAnimationData[]> = {};

  const enabled = new Map();
  const disabled = new Map();

  const isAmong = (num, top, bottom) => num >= top && num <= bottom;

  useEffect(() => {
    initAnimation();
    onScroll();

    window.addEventListener("scroll", onScroll);
    return (() => {
      window.removeEventListener("scroll", onScroll);
    })
  }, []);

  const onScroll = () => {
    // 현재 스크롤 위치 파악
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;

    // disabled 순회하며 활성화할 요소 찾기.
    disabled.forEach((obj, refname) => {
      // 만약 칸에 있다면 해당 요소 활성화
      if (
        isAmong(currentPos, obj.top, obj.bottom)
      ) {
        enabled.set(refname, obj);
        disabled.delete(refname);
      }
    });

    // enabled 순회하면서 헤제할 요소를 체크
    enabled.forEach((obj, refname) => {
      const {top, bottom, topStyle, bottomStyle} = obj;
      // 범위 밖에 있다면
      if (!isAmong(currentPos, top, bottom)) {
        // 위로 나갔다면 시작하는 스타일 적용
        if (currentPos <= top) {
          Object.keys(topStyle).forEach((styleName) => {
            applyStyle(refs.current[refname], styleName, topStyle[styleName]);
          });
        }
        // 아래로 나갔다면 끝나는 스타일적용
        else if (currentPos >= bottom) {
          Object.keys(bottomStyle).forEach((styleName) => {
            applyStyle(
              refs.current[refname],
              styleName,
              bottomStyle[styleName]
            );
            // this.refs[refname].style[styleName] = bottomStyle[styleName];
          });
        }

        // 리스트에서 삭제하고 disabled로 옮김.
        disabled.set(refname, obj);
        enabled.delete(refname);
      }

      // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
      else {
        applyAllAnimation(currentPos, refname);
      }
    });
  }

  const initAnimation = () => {
    // 모든 요소를 disabled 에 넣음.
    for (const refname of Object.keys(initDataMap)) {
      disabled.set(refname, initDataMap[refname]);
    }

    // 각 애니메이션을 enabled == false 로 만듬.
    // for (const refname of Object.keys(animationDataMap)) {
    //   for (const animation of animationDataMap[refname]) {
    //     animation.enabled = false;
    //   }
    // }

    // 초기 스타일 적용
    disabled.forEach((obj, refname) => {
      Object.keys(obj.topStyle).forEach((styleName) => {
        const pushValue = obj.topStyle[styleName];
        refs.current[refname].style[styleName] = pushValue;
      });
    });
  }

  const applyStyles = (refname, styles, r, unit = "px") => {
    for (const style of Object.keys(styles)) {
      const {topValue, bottomValue} = styles[style];
      const calc = (bottomValue - topValue) * r + topValue;
      applyStyle(refs.current[refname], style, calc, unit);
    }
  }

  const applyStyle = (element, styleName, value, unit = "px") => {
    if (styleName === "translateX") {
      element.style.transform = `translateX(${value}${unit})`;
      return;
    }
    if (styleName === "translateY") {
      element.style.transform = `translateY(${value}${unit})`;
      return;
    }
    if (styleName === "width" || "height") {
      element.style[styleName] = value + 'px';
    }

    // console.log(value, styleName);
    element.style[styleName] = value;
  };

  const applyAllAnimation = (currentPos, refname) => {
    const animations = animationDataMap[refname];
    if (!animations) return;
    for (const animation of animations) {
      const {top: a_top, bottom: a_bottom, easing, styles} = animation;
      const isIn = isAmong(currentPos, a_top, a_bottom);
      // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
      if (isIn) {
        if (!animation.enabled) animation.enabled = true;
      } else if (!isIn && animation.enabled) {
        if (currentPos <= a_top) {
          applyStyles(refname, styles, 0);
        } else if (currentPos >= a_bottom) {
          applyStyles(refname, styles, 1);
        }
        animation.enabled = false;
      }

      // 애니메이션이 enabled 라면, 애니메이션 적용.
      if (animation.enabled) {
        const r = EasingMap[easing]((currentPos - a_top) / (a_bottom - a_top));
        applyStyles(refname, styles, r);
      }
    }
  }

  const addAnimation = ({key, ref, initData, animationData}: AddAnimationProps) => {
    refs.current[key] = ref;
    initDataMap[key] = initData;
    animationDataMap[key] = animationData;
  };

  return {addAnimation};
};
