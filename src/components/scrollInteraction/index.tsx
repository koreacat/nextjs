import React from 'react';
import Title from './title/Title';
import Step from './step/Step';
import Character from './character/Character';
import MatchInfo from './matchInfo/MatchInfo';
import FAQ from './faq/FAQ';
import {useScrollInteraction} from "../../util/hooks/useScrollInteraction/useScrollInteraction";

const ScrollInteraction = () => {
  const { onScrollStyles, onScrollClassName } = useScrollInteraction();

  return (
    <>
      {/* 전체 타이틀 영역 */}
      <Title onScrollStyles={onScrollStyles} onScrollClassName={onScrollClassName} />

      {/* 스텝 영역 */}
      <Step onScrollClassName={onScrollClassName} />

      {/* 캐릭터 영역 */}
      <Character onScrollClassName={onScrollClassName} />

      {/* 매칭 정보 영역 */}
      <MatchInfo onScrollStyles={onScrollStyles} onScrollClassName={onScrollClassName} />

      {/* FAQ, 서비스 정보 영역 */}
      <FAQ />
    </>
  );
};

export default ScrollInteraction;
