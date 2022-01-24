import React from 'react';
import classnames from 'classnames/bind';
import styles from './matchInfo.module.scss';
import Joy from './Joy';
import Title from './Title';
import ImgList from './ImgList';
import Info from './Info';
import {OnScrollStyles} from "../../../util/hooks/useScrollInteraction/data/styleData";
import {OnScrollClassName} from "../../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface MatchProps {
  onScrollStyles: OnScrollStyles
  onScrollClassName: OnScrollClassName;
}

const MatchInfo = ({ onScrollStyles, onScrollClassName }: MatchProps) => {
  return (
    <div className={cx('matchInfoArea')}>
      <Title onScrollClassName={onScrollClassName} />
      <ImgList onScrollClassName={onScrollClassName} />
      <Info onScrollStyles={onScrollStyles} />
      <Joy onScrollClassName={onScrollClassName} />
    </div>
  );
};

export default MatchInfo;
