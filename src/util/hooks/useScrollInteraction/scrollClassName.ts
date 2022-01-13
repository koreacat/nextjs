import { ClassNameData, OnScrollClassNameProps } from './data/classData';
import { getBaseLine, getKey, isBetween } from './common';

/**
 * scrollClassName() 스크롤 시 지정한 구간에서 class 를 add, remove 해주는 함수
 *
 * - handleClassName()
 *    스크롤 시 설정한 classDataRecord 를 순회하며 class 를 add, remove 한다.
 *
 * - handleClassReverse()
 *    reverse(역재생) 옵션이 false 인 경우 (default false)
 *    class 를 한번만 add 하고 classDataRecord 에서 삭제시켜 class 를 add, remove 하지 않는다.
 *
 */

const scrollClassName = (els: Record<string, HTMLElement>) => {
  const classDataRecord: Record<string, ClassNameData> = {};

  const handleClassName = (currentPos: number) => {
    for (const key in classDataRecord) {
      const classData = classDataRecord[key];
      const el = els[key];
      const { baseLineEl, top, bottom, className, reverse } = classData;
      const baseLine = getBaseLine(baseLineEl, currentPos);

      if (isBetween(baseLine, top(), bottom())) {
        el.classList.add(className);
        handleClassReverse(reverse, key);
      } else el.classList.remove(className);
    }
  };

  const handleClassReverse = (reverse: boolean | undefined, key: string) => {
    if (!reverse) delete classDataRecord[key];
  };

  const onScrollClassName = ({ el, classData }: OnScrollClassNameProps) => {
    if (!el) throw new Error('el is not defined');
    const key = getKey();
    els[key] = el;
    classDataRecord[key] = classData;
  };

  return { handleClassName, onScrollClassName };
};

export default scrollClassName;
