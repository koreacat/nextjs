import React from 'react';
import ReactPlayer from 'react-player';
import classnames from 'classnames/bind';
import styles from './mainVideo.module.scss';

const cx = classnames.bind(styles);

const MainVideo = () => {
  return (
    <div className={cx('mainVideoArea')}>
      <div className={cx('videoWrap')}>
        <ReactPlayer
          url={`/nextjs/video/matchIntroduce/videoMain.mp4`}
          playing={true}
          muted={true}
          loop={true}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <div className={cx('titleArea')}>
        <span className={cx('text')}>조이 프렌즈, 한국 상륙!</span>
        <strong className={cx('title')}>잡다, 취업의 상식을 깨다.</strong>
      </div>
    </div>
  );
};

export default MainVideo;
