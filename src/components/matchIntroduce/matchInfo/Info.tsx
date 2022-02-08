import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import {OnScrollStyles, StyleData} from "../../../util/hooks/useScrollInteraction/data/styleData";

const cx = classnames.bind(styles);

interface InfoProps {
  onScrollStyles: OnScrollStyles;
}

const Info = ({ onScrollStyles }: InfoProps) => {
  const baseLineRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnimation();
  }, []);

  const getInitStyleData = (topValue: number) => {
    return {
      baseLineEl: baseLineRef.current,
      top: () => -window.innerHeight + 300,
      bottom: () => -window.innerHeight + 1000,
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
        top: () => -window.innerHeight + 300,
        bottom: () => -window.innerHeight + 1000,
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
    onScrollStyles({ el: box1Ref.current, initStyleData: getInitStyleData(120), styleDataArr: getStyleData(120) });
    onScrollStyles({ el: box2Ref.current, initStyleData: getInitStyleData(240), styleDataArr: getStyleData(240) });
    onScrollStyles({ el: box3Ref.current, initStyleData: getInitStyleData(420), styleDataArr: getStyleData(420) });
    onScrollStyles({ el: box4Ref.current, initStyleData: getInitStyleData(440), styleDataArr: getStyleData(440) });
  };

  return (
    <>
      <div ref={baseLineRef} className={cx('matchInfoInner')}>
        {/* [D] 스크롤 요소 */}
        <div ref={box1Ref} className={cx('matchInfoBox', 'type1')}>
          <em className={cx('infoTitle')}>
            하나의 프로필로
            <br />
            모든 기업에 지원
          </em>
          <p className={cx('infoDesc')}>
            기업에 지원할 때마다 자기소개서를 일일이 작성하지
            <br />
            않아도 돼요. 프로필 입력과 역검 응시 한 번이면
            <br />
            모든 포지션에 지원할 수 있어요.
          </p>
        </div>

        <div className={cx('matchInfoWrap')}>
          {/* [D] 스크롤 요소 */}
          <div ref={box2Ref} className={cx('matchInfoBox', 'type2')}>
            <em className={cx('infoTitle')}>
              내게 관심있는 기업을
              <br />
              확인할 수 있어요
            </em>
            <p className={cx('infoDesc')}>
              궁금하지 않으세요?
              <br />
              프로필 열람 확인을 통해 어느 기업이
              <br />
              내게 관심을 가지고 있는지 알 수 있어요.
            </p>
          </div>

          {/* [D] 스크롤 요소 */}
          <div ref={box3Ref} className={cx('matchInfoBox', 'type3')}>
            <em className={cx('infoTitle')}>
              언제쯤 응답이 올 지
              <br />
              미리 알 수 있어요
            </em>
            <p className={cx('infoDesc')}>
              지원 후 기업의 연락을 하염없이 기다리지 않나요?
              <br />
              잡다에서는 기업의 평균응답기간을 지원 전에
              <br />
              미리 확인할 수 있어요.
            </p>
          </div>
        </div>
      </div>

      <div className={cx('matchInfoInner')}>
        {/* [D] 스크롤 요소 */}
        <div ref={box4Ref} className={cx('matchInfoBox', 'type4')}>
          <div className={cx('infoTextArea')}>
            <em className={cx('infoTitle')}>입사축하 키트</em>
            <p className={cx('infoDesc')}>
              <span className={cx('emphasis')}>취업보다 입사 후가 더 중요하니까!</span>
              취업 필수템부터,
              <br />
              신입사원 회사생활 가이드까지!
              <br />
              입사 인증을 하면
              <br />
              잡다 입사축하키트를 보내드려요.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
