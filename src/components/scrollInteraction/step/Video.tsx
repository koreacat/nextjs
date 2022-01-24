import React from 'react';
import classnames from 'classnames/bind';
import styles from './step.module.scss';

const cx = classnames.bind(styles);

const Video = () => {
  return (
    <div className={cx('videoArea')}>
      <div className={cx('videoInner')}>
        <div className={cx('videoWrap')}>

        </div>
      </div>
      <div className={cx('videoInner')}>
        <div className={cx('videoWrap')}>

        </div>
      </div>
      <div className={cx('videoInner')}>
        <div className={cx('videoWrap')}>

        </div>
      </div>
    </div>
  );
};

export default Video;
