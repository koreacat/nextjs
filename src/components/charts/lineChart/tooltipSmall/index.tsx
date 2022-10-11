import classnames from 'classnames/bind';
import styles from './tooltipSmall.module.scss';

const cx = classnames.bind(styles);

type ToolTipType = 'black' | 'green' | 'blue';

interface TooltipProps {
  type?: ToolTipType;
  value: string;
}

const TooltipSmall = ({ type = 'black', value }: TooltipProps) => {
  return (
    <div className={cx('tooltipArea', type)}>
      <span className={cx('text')}>{value}</span>
    </div>
  );
};

export default TooltipSmall;
