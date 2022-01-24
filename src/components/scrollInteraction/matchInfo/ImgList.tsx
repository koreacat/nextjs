import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import {ClassNameData, OnScrollClassName} from "../../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface ImgListProps {
  onScrollClassName: OnScrollClassName;
}

const ImgList = ({ onScrollClassName }: ImgListProps) => {
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
    <div ref={baseLineRef} className={cx('imgArea')}>
      <p className={cx('desc', 'type1')}>
        내가 선호하는
        <br />
        직무, 지역, 연봉에 딱 맞는
        <br />
        포지션을 추천해줘요.
      </p>
      <p className={cx('desc', 'type2')}>
        합격가능성까지 고려한
        <br />
        최적의 포지션을
        <br />
        AI가 상시로 추천해줘요.
      </p>
      <ul className={cx('imgList')}>
        <li className={cx('listItem', 'type1')} />
        <li className={cx('listItem', 'type2')} />
        <li className={cx('listItem', 'type3')} />
        <li className={cx('listItem', 'empty')} />
        <li className={cx('listItem', 'type4')} />
        <li className={cx('listItem', 'type5')} />
        <li className={cx('listItem', 'type6')} />
      </ul>
    </div>
  );
};

export default ImgList;
