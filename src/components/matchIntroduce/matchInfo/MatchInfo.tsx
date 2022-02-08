import React from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import Joy from './Joy';
import Title from './Title';
import ImgList from './ImgList';
import Info from './Info';
import {OnScrollStyles} from "../../../util/hooks/useScrollInteraction/data/styleData";

const cx = classnames.bind(styles);

interface MatchProps {
  onScrollStyles: OnScrollStyles;
}

const MatchInfo = ({ onScrollStyles }: MatchProps) => {
  return (
    <div className={cx('matchInfoArea')}>
      <Title />
      <ImgList />
      <Info onScrollStyles={onScrollStyles} />
      <Joy />
    </div>
  );
};

export default MatchInfo;
