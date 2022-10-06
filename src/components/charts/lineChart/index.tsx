import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';
import { useEffect, useRef, useState } from 'react';
import {ChartData, LineChartType} from "./data";
import Rows from "./Rows";
import Buttons from "./Buttons";
import Columns from "./Columns";
import Divider from "./Divider";
import Line from "./Line";
import Points from "./Points";

const cx = classnames.bind(styles);

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
  const maxColumns = Math.max(columns.length, data.length - 1);
  const isOver = viewCount < maxRow;

  useEffect(() => {
    if (onIdx !== undefined) {
      const idx = onIdx > maxColumns ? maxColumns : onIdx;
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

  const handleClick = (index: number) => {
    setOnIndex(index);
  }

  return (
    <div className={cx('lineChartArea')}>
      {/* Columns 영역 */}
      <Columns columns={columns}/>

      <div ref={chartRef} className={cx('chartWrap')}>
        <div ref={tableRef} className={cx('tableArea')} style={{ width: areaWidth, transform: translateX }}>
          {/* 가로 구분선 영역 */}
          <Divider value={columns.length - 1}/>

          {/* 꺾은 선, 면 영역 */}
          <Line data={data} type={type} tableRef={tableRef} rows={rows} columnHeight={columnHeight} />

          {/* 점, 툴팁, 세로 선 영역 */}
          <Points data={data} type={type} onIndex={onIndex} handleClick={handleClick} columnHeight={columnHeight} maxRow={maxRow} />
        </div>

        {/* Rows 영역 */}
        <Rows rows={rows} maxRow={maxRow} onIndex={onIndex} handleClick={handleClick} areaWidth={areaWidth} translateX={translateX}/>

        {/* 버튼 영역 */}
        <Buttons slideIndex={slideIndex} setSlideIndex={setSlideIndex} maxRow={maxRow} viewCount={viewCount}/>
      </div>
    </div>
  );
};

export default LineChart;
