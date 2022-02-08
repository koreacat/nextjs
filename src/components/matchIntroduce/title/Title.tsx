import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './title.module.scss';
import { Waypoint } from 'react-waypoint';
import {OnScrollStyles, StyleData} from "../../../util/hooks/useScrollInteraction/data/styleData";

const cx = classnames.bind(styles);

interface TitleProps {
  onScrollStyles: OnScrollStyles;
}

const Title = ({ onScrollStyles }: TitleProps) => {
  const [fadeIn, setFadeIn] = useState(false);
  const baseLineRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLElement>(null);
  const img2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setAnimation();
  }, []);

  const getInitStyleData = (topValue: number) => {
    return {
      baseLineEl: baseLineRef.current,
      top: () => -window.innerHeight + 1000,
      bottom: () => -window.innerHeight + 1500,
      styles: {
        translateY: {
          topValue: topValue,
          bottomValue: 0,
          unit: 'px',
        },
      },
      reverse: true,
    };
  };

  const getStyleData: (topValue: number) => StyleData[] = (topValue: number) => {
    return [
      {
        baseLineEl: baseLineRef.current,
        top: () => -window.innerHeight + 1000,
        bottom: () => -window.innerHeight + 1500,
        easing: 'liner',
        styles: {
          translateY: {
            topValue: topValue,
            bottomValue: 0,
            unit: 'px',
          },
        },
      },
    ];
  };

  const setAnimation = () => {
    onScrollStyles({ el: img1Ref.current, initStyleData: getInitStyleData(160), styleDataArr: getStyleData(160) });
    onScrollStyles({ el: img2Ref.current, initStyleData: getInitStyleData(320), styleDataArr: getStyleData(320) });
  };

  const handleOnEnter = () => {
    setFadeIn(true);
  };

  return (
    <div ref={baseLineRef} className={cx('titleArea', { on: fadeIn })}>
      <strong className={cx('title')}>
        채용공고 찾지말고
        <br />
        <span className={cx('emphasis')}>잡다매칭</span> 받자
      </strong>

      <p className={cx('desc')}>
        채용공고 찾느라 많이 힘들었죠?
        <br />
        잡다에서는 신입도 경력도 면접 제안 받을 수 있어요.
      </p>
      <Waypoint onEnter={handleOnEnter} />

      <div className={cx('imgArea')}>
        {/* [D] 스크롤 요소 */}
        <span ref={img1Ref} className={cx('img', 'img1')}>
          <p className={cx('text')}>
            간단히 프로필, 역량, 선호정보를 입력하면
            <br />
            조건에 맞는 기업에서 면접 제안이 와요
          </p>
        </span>
        {/* [D] 스크롤 요소 */}
        <span ref={img2Ref} className={cx('img', 'img2')} />
      </div>
    </div>
  );
};

export default Title;
