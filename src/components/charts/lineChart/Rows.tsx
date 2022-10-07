import classnames from "classnames/bind";
import styles from "./lineChart.module.scss";
import {EDGE_SPACE} from "./data";

const cx = classnames.bind(styles);

interface RowsProps {
  rows: string[];
  maxRow: number;
  onIndex: number;
  handleClick: (index: number) => void;
  tableWidthWhitUnit: string;
  translateX: string;
}

const Rows = ({ rows, maxRow, onIndex, handleClick, tableWidthWhitUnit, translateX }: RowsProps) => {
  const getRowsEl = () => {
    const rowEl = rows.map((row, index) => {

      return (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={cx('row', { on: index === onIndex })}
          style={{ width: index === 0 ? `${EDGE_SPACE * 100}%` : '100%' }}
        >
          {row}
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
        <div className={cx('row')} style={{ width: `${EDGE_SPACE * 100}%`}} />
      </>
    );
  };

  return (
    <div className={cx('rowArea')} style={{ width: tableWidthWhitUnit, transform: translateX }}>
      <div className={cx('rowWrap')}>{getRowsEl()}</div>
    </div>
  )
}

export default Rows;