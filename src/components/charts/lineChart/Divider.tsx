import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';

const cx = classnames.bind(styles);

interface DividerProps {
  value: number;
}

const Divider = ({ value }: DividerProps) => {
  const dividerEl = new Array(value).fill(null).map((_, index) => <div key={index} className={cx('divider')} />);
  return <div className={cx('dividerArea')}>{dividerEl}</div>;
};

export default Divider;
