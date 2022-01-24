import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './step.module.scss';
import Video from './Video';
import StepTitle from './StepTitle';
import {OnScrollClassName} from "../../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface StepProps {
  onScrollClassName: OnScrollClassName;
}

const Step = ({ onScrollClassName }: StepProps) => {
  const baseLineRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnimation();
  }, []);

  const setAnimation = () => {
    onScrollClassName({ el: step1Ref.current, classNameData: getClassData(1) });
    onScrollClassName({ el: step2Ref.current, classNameData: getClassData(2) });
    onScrollClassName({ el: step3Ref.current, classNameData: getClassData(3) });
  };

  const getClassData = (step: number) => {
    const current = baseLineRef.current;

    return {
      baseLineEl: current,
      top: () => (current ? (current.getBoundingClientRect().height / 3) * (step - 1) - 300 : 0),
      bottom: () => (current ? (current.getBoundingClientRect().height / 3) * step - 300 : 0),
      className: cx('visible'),
      reverse: true,
    };
  };

  return (
    <div className={cx('stepArea')}>
      <StepTitle />

      <div ref={baseLineRef} className={cx('stepInner')}>
        <div className={cx('textArea')}>
          {/* [D] 상황에 맞춰서 'visible' 클래스 분기해주세요. */}
          <div ref={step1Ref} className={cx('textWrap')}>
            <span className={cx('step', 'type1')}>STEP 1</span>
            <em className={cx('title')}>프로필 입력</em>
            <p className={cx('desc')}>
              반복되는 자소서 쓰기는 이제 그만.
              <br />
              기본 프로필만 입력하세요.
            </p>
            <p className={cx('desc')}>
              신입인지 경력인지 체크하고
              <br />
              희망 직군/직무를 입력하면
              <br />
              1단계, 준비완료.
            </p>
          </div>

          <div ref={step2Ref} className={cx('textWrap')}>
            <span className={cx('step', 'type2')}>STEP 2</span>
            <em className={cx('title')}>역검(AI역량검사) 응시</em>
            <p className={cx('desc')}>
              의미 없는 스펙쌓기는 이제 그만.
              <br />
              역검으로 당신만의 역량을 뽐내보세요.
            </p>
            <p className={cx('desc')}>
              언제 어디서든 편하게
              <br />
              있는 그대로의 모습을 보여주면
              <br />
              2단계도, 준비완료.
            </p>
          </div>

          <div ref={step3Ref} className={cx('textWrap')}>
            <span className={cx('step', 'type3')}>STEP 3</span>
            <em className={cx('title')}>선호조건 입력</em>
            <p className={cx('desc')}>관심 없는 채용공고는 이제 그만!</p>
            <p className={cx('desc')}>
              1. 일하고 싶은 지역
              <br />
              2. 받고 싶은 연봉
              <br />
              3. 누리고 싶은 복지
            </p>
          </div>
        </div>

        <Video />
      </div>
    </div>
  );
};

export default Step;
