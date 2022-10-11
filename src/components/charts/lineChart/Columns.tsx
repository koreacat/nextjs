import classnames from 'classnames/bind';
import { LineChartSizeType } from './data';
import styles from './lineChart.module.scss';

const cx = classnames.bind(styles);

interface ColumnsProps {
  columns: string[];
  type: LineChartSizeType;
}

const Columns = ({ columns, type }: ColumnsProps) => {
  const columnsEl = columns
    .map((column, index) => (
      <div key={index} className={cx('column')}>
        {column}
      </div>
    ))
    .reverse();

  return (
    <div className={cx('columnArea', type)}>
      <div className={cx('columnWrap')}>{columnsEl}</div>
    </div>
  );
};

export default Columns;
