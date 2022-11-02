import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';
import { ChartData, EDGE_SPACE, LineChartColorsType, LineChartSizeType, LineColors, ShapeColors } from './data';
import { MutableRefObject, useEffect, useState } from 'react';

const cx = classnames.bind(styles);

interface LineProps {
  data: ChartData[];
  type: LineChartSizeType;
  colors: LineChartColorsType;
  rows: string[];
  columnHeight: number;
  height: number;
  tableRef: MutableRefObject<HTMLDivElement | null>;
  trigger: boolean;
}

const Line = ({ data, type, colors, rows, columnHeight, height, tableRef, trigger }: LineProps) => {
  const getRowWidth = () => {
    if (tableRef.current) {
      return tableRef.current?.clientWidth / (rows.length - 1 + EDGE_SPACE[type] * 2);
    }
    return 0;
  };
  const getX = (value: number) => EDGE_SPACE[type] * getRowWidth() + value * getRowWidth();
  const getY = (value: number) => height - columnHeight * value;
  const getChar = (value: number) => (value === data.length - 1 ? '' : 'L');
  const getPoint = (x: number, y: number) => `${getX(x)} ${getY(y)}`;
  const stroke = LineColors[colors][type];
  const fill = ShapeColors[colors];
  const [lineData, setLineData] = useState('');
  const [shapeData, setShapeData] = useState('');

  useEffect(() => {
    const updateSize = () => {
      setLineData(getLineData());
      setShapeData(getShapeData());
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [data, tableRef.current?.clientWidth]);

  const getLineData = () => {
    if(!data.length) return '';
    return data.reduce((prev, { column }, i) => `${prev} ${getPoint(i, column)} ${getChar(i)}`, 'M');
  }

  const getShapeData = () => {
    if(!data.length) return '';
    return data.reduce((prev, { column }, i) => {
      if (i === data.length - 1) {
        const shape = `L${getX(i)} ${height} L${getRowWidth() * EDGE_SPACE[type]} ${height} Z`;
        return `${prev} ${getPoint(i, column)} ${shape}`;
      }
      return `${prev} ${getPoint(i, column)} ${getChar(i)}`;
    }, 'M');
  }


  const getDataLineEl = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
        <path d={lineData} stroke={stroke} />
        <path d={shapeData} fill={fill} fillOpacity={0.2} />
      </svg>
    );
  };

  return <div className={cx('lineArea', { animation: trigger })}>{getDataLineEl()}</div>;
};

export default Line;
