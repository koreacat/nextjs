import classnames from 'classnames/bind';
import styles from './tooltip.module.scss';

const cx = classnames.bind(styles);

interface TooltipProps {
  type: 'white' | 'gray';
  score: number;
  elapsedTime: number;
}

const Tooltip = ({ type, score, elapsedTime }: TooltipProps) => {
  return (
    <div className={cx('tooltipArea', type)}>
      <span className={cx('text')}>점수 : {score}점</span>
      <span className={cx('text')}>소요시간 : {elapsedTime}분</span>
    </div>
  );
};

export default Tooltip;
