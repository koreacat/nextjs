import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import {ClassNameData, OnScrollClassName} from "../../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface TitleProps {
  onScrollClassName: OnScrollClassName;
}

const Title = ({ onScrollClassName }: TitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnimation();
  }, []);

  const setAnimation = () => {
    const classNameData: ClassNameData = {
      baseLineEl: titleRef.current,
      top: () => -window.innerHeight,
      className: cx('on'),
    };

    onScrollClassName({ el: titleRef.current, classNameData });
  };

  return (
    <div ref={titleRef} className={cx('matchTitleArea')}>
      <span className={cx('text')}>여기서 끝이 아닙니다.</span>
      <strong className={cx('title')}>
        추천으로
        <br />
        나에게 딱! 맞게
      </strong>
    </div>
  );
};

export default Title;
