import classnames from "classnames/bind";
import styles from "./lineChart.module.scss";
import {ChartData, EDGE_SPACE, LineChartType, LineColors, ShapeColors} from "./data";
import {RefObject} from "react";

const cx = classnames.bind(styles);

interface LineProps {
  data: ChartData[];
  type?: LineChartType;
  tableRef: RefObject<HTMLDivElement>;
  rows: string[];
  columnHeight: number;
}

const Line = ({data, type, tableRef, rows, columnHeight}: LineProps) => {
  const getDataLineEl = () => {
    const stroke = LineColors[type];
    const fill = ShapeColors[type];
    const width = tableRef.current?.clientWidth ?? 0;
    const height = tableRef.current?.clientHeight ?? 0;

    const getX = (value: number) => (width / (rows.length + (1 - EDGE_SPACE))) * (value + EDGE_SPACE);
    const getY = (value: number) => height - columnHeight * value;
    const getChar = (value: number) => value === data.length - 1 ? '' : 'L';
    const getPoint = (x: number, y: number) => `${getX(x)} ${getY(y)}`;

    const getLineData = () =>
      data.reduce((prev, {column}, i) =>
        `${prev} ${getPoint(i, column)} ${getChar(i)}`, 'M');

    const getShapeData = () =>
      data.reduce((prev, {column}, i) => {
        if (i === data.length - 1) {
          const shape = `L${getX(i)} ${height} L${width / (rows.length) * EDGE_SPACE} ${height} Z`;
          return `${prev} ${getPoint(i, column)} ${shape}`;
        }
        return `${prev} ${getPoint(i, column)} ${getChar(i)}`;
      }, 'M');

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
        <path d={getLineData()} stroke={stroke}/>
        <path d={getShapeData()} fill={fill} fillOpacity={0.2}/>
      </svg>
    )
  }

  return <div className={cx('lineArea')}>{getDataLineEl()}</div>;
}

export default Line;