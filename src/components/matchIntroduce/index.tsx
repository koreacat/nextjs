import React from 'react';
import MainVideo from './mainVideo/MainVideo';
import Title from './title/Title';
import Step from './step/Step';
import Character from './character/Character';
import MatchInfo from './matchInfo/MatchInfo';
import FAQ from './faq/FAQ';
import classnames from 'classnames/bind';
import styles from './introduce.module.scss';
import {useScrollInteraction} from "../../util/hooks/useScrollInteraction/useScrollInteraction";

const cx = classnames.bind(styles);

const MatchIntroduction = () => {
  const { onScrollStyles, onScrollClassName } = useScrollInteraction();

  return (
    <>
      {/* 메인 영상 영역 */}
      <MainVideo />

      <div className={cx('mainContentArea')}>
        {/* 전체 타이틀 영역 */}
        <Title onScrollStyles={onScrollStyles} />

        {/* 스텝 영역 */}
        <Step onScrollClassName={onScrollClassName} onScrollStyles={onScrollStyles} />

        {/* 캐릭터 영역 */}
        <Character onScrollClassName={onScrollClassName} />

        {/* 매칭 정보 영역 */}
        <MatchInfo onScrollStyles={onScrollStyles} />

        {/* FAQ, 서비스 정보 영역 */}
        <FAQ />
      </div>
    </>
  );
};

export default MatchIntroduction;
