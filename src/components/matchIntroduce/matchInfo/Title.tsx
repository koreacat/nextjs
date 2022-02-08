import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import { Waypoint } from 'react-waypoint';

const cx = classnames.bind(styles);

const Title = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const handleOnEnter = () => {
    setFadeIn(true);
  };

  return (
    <div className={cx('matchTitleArea', { on: fadeIn })}>
      <span className={cx('text')}>여기서 끝이 아닙니다.</span>
      <strong className={cx('title')}>
        추천으로
        <br />
        나에게 딱! 맞게
      </strong>
      <Waypoint onEnter={handleOnEnter} />
    </div>
  );
};

export default Title;
