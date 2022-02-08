import ReactPlayer from 'react-player';
import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './step.module.scss';
import { Waypoint } from 'react-waypoint';
import {OnScrollStyles, StyleData} from "../../../util/hooks/useScrollInteraction/data/styleData";

const cx = classnames.bind(styles);

interface VideoProps {
  onScrollStyles: OnScrollStyles;
}

const Video = ({ onScrollStyles }: VideoProps) => {
  const videoRef = useRef<HTMLDivElement>(null);

  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);

  useEffect(() => {
    setAnimation();
  }, []);

  const setAnimation = () => {
    // 카드리스트 smooth scrolling 애니메이션
    const initStyleData = {
      baseLineEl: videoRef.current,
      top: () => 0,
      bottom: () => 2000,
      styles: {
        translateY: {
          topValue: 0,
          bottomValue: -210,
          unit: 'px',
        },
      },
      reverse: true,
    };

    const styleDataArr: StyleData[] = [
      {
        baseLineEl: videoRef.current,
        top: () => 0,
        bottom: () => 2000,
        easing: 'liner',
        styles: {
          translateY: {
            topValue: 0,
            bottomValue: -210,
            unit: 'px',
          },
        },
      },
    ];

    onScrollStyles({ el: videoRef.current, initStyleData, styleDataArr });
  };

  return (
    <div ref={videoRef} className={cx('videoArea')}>
      <div className={cx('videoInner')}>
        <Waypoint onEnter={() => setPlaying1(true)} onLeave={() => setPlaying1(false)} />
        <div className={cx('videoWrap')}>
          <ReactPlayer
            url={`/nextjs/video/matchIntroduce/videoStep1.mp4`}
            playing={playing1}
            muted={true}
            loop={true}
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className={cx('videoInner')}>
        <Waypoint onEnter={() => setPlaying2(true)} onLeave={() => setPlaying2(false)} />
        <div className={cx('videoWrap')}>
          <ReactPlayer
            url={`/nextjs/video/matchIntroduce/videoStep2.mp4`}
            playing={playing2}
            muted={true}
            loop={true}
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className={cx('videoInner')}>
        <Waypoint onEnter={() => setPlaying3(true)} onLeave={() => setPlaying3(false)} />
        <div className={cx('videoWrap')}>
          <ReactPlayer
            url={`/nextjs/video/matchIntroduce/videoStep3.mp4`}
            playing={playing3}
            muted={true}
            loop={true}
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
