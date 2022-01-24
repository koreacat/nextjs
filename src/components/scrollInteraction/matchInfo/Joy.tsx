import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import {ClassNameData, OnScrollClassName} from "../../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface JoyProps {
  onScrollClassName: OnScrollClassName;
}

const Joy = ({ onScrollClassName }: JoyProps) => {
  const baseLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnimation();
  }, []);

  const setAnimation = () => {
    const classNameData: ClassNameData = {
      baseLineEl: baseLineRef.current,
      top: () => -window.innerHeight + 300,
      className: cx('on'),
    };

    onScrollClassName({ el: baseLineRef.current, classNameData });
  };

  return (
    <div ref={baseLineRef} className={cx('joyArea')}>
      <div className={cx('videoWrap')}>

      </div>

      <strong className={cx('title')}>잡다, 취업의 상식을 깨다.</strong>
      <Link href={''}>
        <a className={cx('btnMatch')}>잡다매칭 시작하기</a>
      </Link>
      <span className={cx('text')}>조이프렌즈가 당신의 취업을 응원합니다!</span>
    </div>
  );
};

export default Joy;
