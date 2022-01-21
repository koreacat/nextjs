import {
  ApplyInitStyleProps,
  ApplyStyleProps,
  ApplyStylesProps,
  InitStyleData,
  OnScrollStylesProps,
  SetStyleProps,
  StyleData,
} from './data/styleData';
import { getBaseLine, getKey, isBetween } from './common';
import { Easing } from './data/easing';

/**
 * scrollStyles() 스크롤 시 지정한 구간에서 style 을 적용 해주는 함수
 *
 * - handleStyle()
 *    스크롤 시 설정한 styleDataRecordRef 를 순회하며 style 을 추가한다.
 *    설정한 구간에 있을 경우에 있을 경우 styleData 를, 구간 밖에 있으면 initData 의 style 을 추가한다.
 *
 * - handleStyleReverse()
 *    reverse(역재생) 옵션이 false 인 경우 (default false)
 *    style 이 설정한 구간까지 모두 적용되면, styleDataRecord 에서 삭제시켜 style 을 변경하지 않는다.
 *
 *
 */

const scrollStyles = (els: Record<string, HTMLElement>) => {
  const initStyleDataRecord: Record<string, InitStyleData> = {};
  const styleDataRecord: Record<string, StyleData[]> = {};

  const handleStyles = (currentPos: number) => {
    const htmlEl = document.documentElement;
    const height = Math.max(htmlEl.clientHeight, htmlEl.scrollHeight, htmlEl.offsetHeight);

    for (const key in initStyleDataRecord) {
      const initData = initStyleDataRecord[key];
      const styleDataArr = styleDataRecord[key];
      const el = els[key];
      const { top, bottom = () => height, baseLineEl, styles, reverse } = initData;
      const baseLine = getBaseLine(baseLineEl, currentPos);

      if (isBetween(baseLine, top(), bottom())) applyStyles({ el, styleDataArr, currentPos });
      else applyInitStyle({ key, el, top, styles, baseLine, reverse });
    }
  };

  const handleStyleReverse = (reverse: boolean | undefined, key: string) => {
    if (!reverse) {
      delete initStyleDataRecord[key];
      delete styleDataRecord[key];
    }
  };

  const applyInitStyle = ({ key, el, top, styles, baseLine, reverse }: ApplyInitStyleProps) => {
    for (const styleName in styles) {
      const styleValues = styles[styleName];

      if (styleValues) {
        const { topValue, bottomValue, unit } = styleValues;
        const isOverTop = baseLine <= top();
        const value = isOverTop ? topValue : bottomValue;
        if (!isOverTop) handleStyleReverse(reverse, key);
        setStyle({ el, styleName, value, unit });
      }
    }
  };

  const applyStyles = ({ el, styleDataArr, currentPos }: ApplyStylesProps) => {
    const htmlEl = document.documentElement;
    const height = Math.max(htmlEl.clientHeight, htmlEl.scrollHeight, htmlEl.offsetHeight);

    for (const animationData of styleDataArr) {
      const { baseLineEl, top, bottom = () => height, styles, easing } = animationData;
      const baseLine = getBaseLine(baseLineEl, currentPos);

      const rate = Easing[easing]((baseLine - top()) / (bottom() - top()));
      if (isBetween(baseLine, top(), bottom())) applyStyle({ el, styles, rate });
    }
  };

  const applyStyle = ({ el, styles, rate }: ApplyStyleProps) => {
    for (const styleName in styles) {
      const styleValues = styles[styleName];

      if (styleValues) {
        const { topValue, bottomValue, unit } = styleValues;

        if (typeof topValue === 'number' && typeof bottomValue === 'number') {
          const value = topValue + (bottomValue - topValue) * rate;
          setStyle({ el, styleName, value, unit });
        } else {
          // TODO string value css
        }
      }
    }
  };

  const setStyle = ({ el, styleName, value, unit = '' }: SetStyleProps) => {
    switch (styleName) {
      case 'translateX':
        el.style.transform = `translateX(${value}${unit})`;
        break;
      case 'translateY':
        el.style.transform = `translateY(${value}${unit})`;
        break;
      default:
        el.style[styleName] = `${value}${unit}`;
        break;
    }
  };

  const onScrollStyles = ({ el, initStyleData, styleDataArr }: OnScrollStylesProps) => {
    if (!el) throw new Error('el is not defined');
    const key = getKey();
    els[key] = el;
    initStyleDataRecord[key] = initStyleData;
    styleDataRecord[key] = styleDataArr;
  };

  return { handleStyles, onScrollStyles };
};

export default scrollStyles;
