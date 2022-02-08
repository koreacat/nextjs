import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import { Waypoint } from 'react-waypoint';

const cx = classnames.bind(styles);

const ImgList = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const handleOnEnter = () => {
    setFadeIn(true);
  };

  return (
    <div className={cx('imgArea', { on: fadeIn })}>
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
      <Waypoint onEnter={handleOnEnter} />
    </div>
  );
};

export default ImgList;
