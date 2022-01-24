import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './character.module.scss';
import {OnScrollClassName} from "../../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface CharacterProps {
  onScrollClassName: OnScrollClassName;
}

const Character = ({ onScrollClassName }: CharacterProps) => {
  const baseLineRef = useRef<HTMLDivElement>(null);
  const characterRefs = useRef<HTMLElement[]>([]);

  const setRef = (ref: HTMLElement) => characterRefs.current.push(ref);

  const setScrollInteraction = () => {
    characterRefs.current.forEach((el) => {
      const classNameData = {
        baseLineEl: baseLineRef.current,
        top: () => el.offsetTop - window.innerHeight + 300,
        className: cx('on'),
      };

      onScrollClassName({ el, classNameData });
    });
  };

  useEffect(() => {
    setScrollInteraction();
  }, []);

  return (
    <div ref={baseLineRef} className={cx('characterArea')}>
      <div className={cx('characterInner')}>
        {/* [D] 해당 요소가 하단에 등장하면 'on' 클래스 추가해주세요. */}
        <span ref={setRef} className={cx('character', 'character1')} />
        <span ref={setRef} className={cx('character', 'character2')} />
        <span ref={setRef} className={cx('character', 'character3')} />
        <span ref={setRef} className={cx('character', 'character4')} />
        <span ref={setRef} className={cx('character', 'character5')} />
        <span ref={setRef} className={cx('character', 'character6')} />
        <span ref={setRef} className={cx('character', 'character7')} />
        <span ref={setRef} className={cx('character', 'character8')} />
        <span ref={setRef} className={cx('character', 'character9')} />
        <span ref={setRef} className={cx('character', 'character10')} />
        <span ref={setRef} className={cx('character', 'character11')} />
        <span ref={setRef} className={cx('character', 'character12')} />

        <div className={cx('textArea')}>
          3단계만
          <br />
          입력하면
          <br />
          잡다에서
          <br />
          면접제안이
          <br />
          쏟아진다
        </div>
      </div>
    </div>
  );
};

export default Character;
