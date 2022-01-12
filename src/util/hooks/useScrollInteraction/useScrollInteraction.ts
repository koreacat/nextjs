import { useEffect, useRef } from 'react';
import scrollClassName from "./scrollClassName";
import scrollStyles from "./scrollStyles";

/**
 *
 * !지정한 구간 - baseLine 의 위치나 현재 스크롤의 위치가 설정한 top 과 bottom 의 구간 안에 있을 경우 지정한 구간에 있다고 한다.
 *
 * - hook
 *      useScrollInteraction()
 *      스크롤 시 지정한 구간에서 html element 의 class 와 inline style 을 설정하는 custom hook
 *
 * - function
 *    1. onScrollStyles()
 *      스크롤 시 지정한 구간에서 style 을 적용 해주는 함수
 *
 *    2. onScrollClassName()
 *      스크롤 시 지정한 구간에서 class 를 add, remove 해주는 함수
 *
 *  - param
 *      $el: 스크롤 시 효과를 주고자하는 대상 html dom element
 *      $baseLine?: default - window.pageYOffset(현재 스크롤 위치)
 *                기준점이 되어줄 $el을 설정할 수 있는 옵션,
 *                $baseLine을 따로 설정하지않으면, 현재 스크롤 위치가 기준점이 되기 때문에,
 *                상단 요소의 높이 변화가 생겼을 경우 아래쪽의 모든 요소들이 영향을 받을 수 있음
 *      initData: onScrollStyles()에서 style 변경에 필요한 초기 데이터, $el이 설정한 구간에서 벗어났을 때 style 데이터
 *      styleDataArr: onScrollStyles()에서 style 변경에 필요한 데이터, $el이 설정한 구간 내에 있을 때 적용될 style 데이터
 *      classData: onScrollClassName()에서 class 변경에 필요한 데이터, $el이 설정한 구간 내에 있을 때 적용될 class 데이터
 *      reverse?: default - false
 *                역재생을 허용할 것인지에 대한 옵션,
 *                true 로 설정할 경우 설정한 구간에서 벗어났다가 재진입할 경우 다시 class 나 style 변경이이루어 진다.
 *
 *
 *  - usage
 *      1. 최상단 컴포넌트에 useScrollInteraction hook 을 등록해주고,
 *         스크롤 시 스타일 변경이 필요한 경우 onScrollStyles,
 *         스크롤 시 클래스 변경이 필요한 경우 onScrollClassName 을
 *         자식 컴포넌트에 전달해줍니다.
 *
 *      const Root = () => {
 *        const { onScrollStyles, onScrollClassName } = useScrollInteraction();
 *
 *        return (
 *          <>
 *            <Leaf onScrollStyles={onScrollStyles}>
 *            <Leaf onScrollClassName={onScrollClassName}>
 *          </>
 *        )
 *      }
 *
 *
 *      2. 자식 컴포넌트에서 스크롤시 변경이 필요한 $el 과 데이터를
 *         onScrollStyles 나 onScrollClassName 로 등록해줍니다.
 *
 *      ...
 *      const classData = {
 *        $baseLineEl: baseLineRef.current,
 *        top: () => -window.innerHeight + 300,
 *        bottom: () => -window.innerHeight + 1500,
 *        className: cx('visible'),
 *        reverse: true,
 *      }
 *
 *      useEffect(() => {
 *        onScrollClassName({ $el: step1Ref.current, classData});
 *      }, []);
 *      ...
 *
 */

export const useScrollInteraction = () => {
  const elsRef = useRef<Record<string, HTMLElement>>({});
  const { handleClassName, onScrollClassName } = scrollClassName(elsRef.current);
  const { handleStyle, onScrollStyles } = scrollStyles(elsRef.current);

  useEffect(() => {
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const currentPos = window.pageYOffset || document.documentElement.scrollTop;
    handleClassName(currentPos);
    handleStyle(currentPos);
  };

  return { onScrollStyles, onScrollClassName };
};
