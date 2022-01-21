import { ClassNameData, OnScrollClassNameProps } from './data/classData';
import { getBaseLine, getKey, isBetween } from './common';

/**
 * scrollClassName() 스크롤 시 지정한 구간에서 class 를 add, remove 해주는 함수
 *
 * - handleClassName()
 *    스크롤 시 설정한 classNameDataRecord 를 순회하며 class 를 add, remove 한다.
 *
 * - handleClassReverse()
 *    reverse(역재생) 옵션이 false 인 경우 (default false)
 *    class 를 한번만 add 하고 classNameDataRecord 에서 삭제시켜 class 를 add, remove 하지 않는다.
 *
 */

const scrollClassName = (els: Record<string, HTMLElement>) => {
  const classNameDataRecord: Record<string, ClassNameData> = {};

  const handleClassName = (currentPos: number) => {
    const htmlEl = document.documentElement;
    const height = Math.max(htmlEl.clientHeight, htmlEl.scrollHeight, htmlEl.offsetHeight);

    for (const key in classNameDataRecord) {
      const classData = classNameDataRecord[key];
      const el = els[key];
      const { baseLineEl, top, bottom = () => height, className, reverse } = classData;
      const baseLine = getBaseLine(baseLineEl, currentPos);

      if (isBetween(baseLine, top(), bottom())) {
        el.classList.add(className);
        handleClassReverse(reverse, key);
      } else el.classList.remove(className);
    }
  };

  const handleClassReverse = (reverse: boolean | undefined, key: string) => {
    if (!reverse) delete classNameDataRecord[key];
  };

  const onScrollClassName = ({ el, classNameData }: OnScrollClassNameProps) => {
    if (!el) throw new Error('el is not defined');
    const key = getKey();
    els[key] = el;
    classNameDataRecord[key] = classNameData;
  };

  return { handleClassName, onScrollClassName };
};

export default scrollClassName;
