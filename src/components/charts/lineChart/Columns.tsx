import classnames from "classnames/bind";
import styles from "./lineChart.module.scss";

const cx = classnames.bind(styles);

interface ColumnsProps {
  columns: string[];
}

const Columns = ({columns}: ColumnsProps) => {
  const columnsEl = columns.map((column, index) => (
    <div key={index} className={cx('column')}>
      {column}
    </div>
  )).reverse();

  return (
    <div className={cx('columnArea')}>
      <div className={cx('columnWrap')}>{columnsEl}</div>
    </div>
  )
}

export default Columns;