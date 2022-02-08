import ReactPlayer from 'react-player';
import Link from 'next/link';
import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import { Waypoint } from 'react-waypoint';

const cx = classnames.bind(styles);

const Joy = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const handleOnEnter = () => {
    setFadeIn(true);
  };

  return (
    <div className={cx('joyArea', { on: fadeIn })}>
      <div className={cx('videoWrap')}>
        <ReactPlayer
          url={`/nextjs/video/matchIntroduce/videoJoy.mp4`}
          playing={true}
          muted={true}
          loop={true}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <strong className={cx('title')}>잡다, 취업의 상식을 깨다.</strong>
      <Link href={''}>
        <a className={cx('btnMatch')}>잡다매칭 시작하기</a>
      </Link>
      <span className={cx('text')}>조이프렌즈가 당신의 취업을 응원합니다!</span>
      <Waypoint onEnter={handleOnEnter} />
    </div>
  );
};

export default Joy;
