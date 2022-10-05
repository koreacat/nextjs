import classnames from 'classnames/bind';
import styles from './historyChart.module.scss';
import { ReactElement, useEffect, useRef, useState } from 'react';

const cx = classnames.bind(styles);

export interface ChartData {
  column: number;
  toolTip?: ReactElement;
  onClick?: () => void;
}

interface HistoryChartProps {
  viewCount: number;
  rows: string[];
  columns: string[];
  data: ChartData[];
  onIndex?: number;
}

const HistoryChart = ({ viewCount, rows, columns, data, onIndex: on }: HistoryChartProps) => {
  const [onIndex, setOnIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [rowWidth, setRowWidth] = useState<number>(0);
  const [columnHeight, setColumnHeight] = useState<number>(0);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  const maxRow = Math.max(rows.length, data.length);
  const isOver = viewCount < maxRow;

  useEffect(() => {
    if (on !== undefined) {
      setOnIndex(on);
      setSlideIndex(on - viewCount + 1);
    }

    if (chartRef.current) {
      setRowWidth(chartRef.current.clientWidth / (viewCount + 1));
    }

    if (tableRef.current) {
      setColumnHeight(tableRef.current?.clientHeight / (columns.length - 1));
    }
  }, []);

  const areaWidth = isOver ? `${(maxRow + 1) * rowWidth}px` : '100%';
  const translateX = isOver ? `translateX(${-(slideIndex * rowWidth)}px)` : 'translateX(0)';
  const prevBtnVisible = isOver && slideIndex !== 0;
  const nextBtnVisible = isOver && slideIndex < maxRow - viewCount;

  const dividerEl = new Array(columns.length - 1).fill(null).map((_, index) => {
    return <div key={index} className={cx('divider')} />;
  });

  const getDataEl = () => {
    const dataEl = data.map((d, index) => {
      const { column, toolTip, onClick } = d;
      const handleClick = () => {
        onClick?.();
      };

      return (
        <div key={index} className={cx('dataWrap', { on: index === onIndex })} style={{ zIndex: data.length - index }}>
          <a
            className={cx('dataBtn')}
            style={{ transform: `translateY(-${column * columnHeight}px)` }}
            onClick={handleClick}
            role="button"
          >
            <div className={cx('tooltipArea', { on: index === data.length - 1 })}>{toolTip}</div>
          </a>
        </div>
      );
    });

    const emptyDataEl = new Array(maxRow - data.length)
      .fill(null)
      .map((_, index) => <div key={index} className={cx('dataWrap', 'empty')} />);

    return (
      <>
        {dataEl}
        {emptyDataEl}
        <div className={cx('dataWrap', 'empty')} />
      </>
    );
  };

  const columnsEl = columns
    .map((column, index) => (
      <div key={index} className={cx('column')}>
        {column}
      </div>
    ))
    .reverse();

  const getRowsEl = () => {
    const rowEl = rows.map((row, index) => {
      return (
        <div key={index} className={cx('row', { on: index === onIndex })}>
          {row}
        </div>
      );
    });

    const emptyRowEl = new Array(maxRow - rows.length)
      .fill(null)
      .map((row, index) => <div key={index} className={cx('row')} />);

    return (
      <>
        {rowEl}
        {emptyRowEl}
        <div className={cx('row')} />
      </>
    );
  };

  return (
    <div className={cx('historyChartArea')}>
      <div className={cx('columnArea')}>
        <div className={cx('columnWrap')}>{columnsEl}</div>
      </div>

      <div ref={chartRef} className={cx('chartWrap')}>
        <div ref={tableRef} className={cx('tableArea')} style={{ width: areaWidth, transform: translateX }}>
          <div className={cx('dividerArea')}>{dividerEl}</div>
          <div className={cx('dataArea')}>{getDataEl()}</div>
        </div>

        <div className={cx('rowArea')} style={{ width: areaWidth, transform: translateX }}>
          <div className={cx('rowWrap')}>{getRowsEl()}</div>
        </div>
        {prevBtnVisible && (
          <a className={cx('btn', 'left')} onClick={() => setSlideIndex(slideIndex - 1)} role="button" />
        )}
        {nextBtnVisible && (
          <a className={cx('btn', 'right')} onClick={() => setSlideIndex(slideIndex + 1)} role="button" />
        )}
      </div>
    </div>
  );
};

export default HistoryChart;
