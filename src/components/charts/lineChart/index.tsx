import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';
import { ReactElement, useEffect, useRef, useState } from 'react';

const cx = classnames.bind(styles);

type LineChartType = 'black' | 'green' | 'blue';
type ToolTipPositionType = 'top' | 'left';

export interface ChartData {
  column: number;
  toolTip?: ReactElement;
  toolTipPosition?: ToolTipPositionType;
  onClick?: () => void;
}

interface LineChartProps {
  type?: LineChartType;
  viewCount: number;
  rows: string[];
  columns: string[];
  data: ChartData[];
  onIndex?: number;
}

const LineChart = ({ type = 'black', viewCount, rows, columns, data, onIndex: onIdx }: LineChartProps) => {
  const [onIndex, setOnIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [rowWidth, setRowWidth] = useState<number>(0);
  const [columnHeight, setColumnHeight] = useState<number>(0);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  const maxRow = Math.max(rows.length, data.length);
  const maxColums = Math.max(columns.length, data.length - 1);
  const isOver = viewCount < maxRow;

  useEffect(() => {
    if (onIdx !== undefined) {
      const idx = onIdx > maxColums ? maxColums : onIdx;
      const slideIndex = idx - viewCount + 1;
      setOnIndex(idx < 0 ? 0 : idx);
      setSlideIndex(slideIndex < 0 ? 0 : slideIndex);
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

  const getDataLineEl = () => {
    const stroke = '#44474B';

    const getLineData = () => {
      return data.reduce((prev, { column }, i) => {
        const x = i * 150;
        const y = column * 70;
        const char = i === data.length - 1 ? '' : 'L';
        return `${prev} ${x} ${y} ${char}`;
      }, 'M');
    }

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
        <path d={getLineData()} stroke={stroke}/>
      </svg>
    )
  }

  const getDataEl = () => {
    const dataEl = data.map((d, index) => {
      const { column, toolTip, toolTipPosition = 'top', onClick } = d;
      const isOn = index === onIndex;

      const handleClick = () => {
        setOnIndex(index);
        onClick?.();
      };

      const getLine = () => {
        if (isOn) return (
          <i
            className={cx('line')}
            style={{ height: `${column * columnHeight}px` }}
          />
        ) 
        return null;
      }

      return (
        <div
          key={index}
          className={cx('dataWrap', type, { on: isOn })}
        >
          {getLine()}
          <a
            className={cx('dataBtn')}
            style={{ transform: `translateY(-${column * columnHeight}px)` }}
            onClick={handleClick}
            role="button"
          >
            <div className={cx('tooltipArea', toolTipPosition, { on: isOn })}>
              {toolTip}
            </div>
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
      .map((_, index) => <div key={index} className={cx('row')} />);

    return (
      <>
        {rowEl}
        {emptyRowEl}
        <div className={cx('row')} />
      </>
    );
  };

  return (
    <div className={cx('lineChartArea')}>
      <div className={cx('columnArea')}>
        <div className={cx('columnWrap')}>{columnsEl}</div>
      </div>

      <div ref={chartRef} className={cx('chartWrap')}>
        <div ref={tableRef} className={cx('tableArea')} style={{ width: areaWidth, transform: translateX }}>
          <div className={cx('dividerArea')}>{dividerEl}</div>
          <div className={cx('dataLineArea')}>{getDataLineEl()}</div>
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

export default LineChart;
