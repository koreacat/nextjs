import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';
import { EDGE_SPACE, LineChartSizeType } from './data';

const cx = classnames.bind(styles);

interface RowsProps {
  rows: string[];
  type: LineChartSizeType;
  maxRow: number;
  onIndex: number | null;
  tableWidthWhitUnit: string;
  translateX: string;
}

const Rows = ({ rows, type, maxRow, onIndex, tableWidthWhitUnit, translateX }: RowsProps) => {
  const getRowsEl = () => {
    const rowEl = rows.map((row, index) => {
      return (
        <div
          key={index}
          className={cx('row', { on: index === onIndex }, type)}
          style={{ width: index === 0 ? `${EDGE_SPACE[type] * 100}%` : '100%' }}
        >
          <span className={cx('rowText')}>{row}</span>
        </div>
      );
    });

    const emptyRowEl = new Array(maxRow - rows.length)
      .fill(null)
      .map((_, index) => <div key={index} className={cx('row')} />);

    return (
      <>
        {rowEl}
        {emptyRowEl}
        <div className={cx('row')} style={{ width: `${EDGE_SPACE[type] * 100}%` }} />
      </>
    );
  };

  return (
    <div className={cx('rowArea')} style={{ width: tableWidthWhitUnit, transform: translateX }}>
      <div className={cx('rowWrap')}>{getRowsEl()}</div>
    </div>
  );
};

export default Rows;
