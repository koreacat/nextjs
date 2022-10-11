import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';
import { ChartData, EDGE_SPACE, LineChartColorsType, LineChartSizeType, LineColors, ShapeColors } from './data';

const cx = classnames.bind(styles);

interface LineProps {
  data: ChartData[];
  type: LineChartSizeType;
  colors: LineChartColorsType;
  rows: string[];
  columnHeight: number;
  width: number;
  height: number;
}

const Line = ({ data, type, colors, rows, columnHeight, width, height }: LineProps) => {
  const rowWidth = (width / ((rows.length - 1) + (EDGE_SPACE[type] * 2)));
  const getX = (value: number) => (EDGE_SPACE[type] * rowWidth) + (value * rowWidth);
  const getY = (value: number) => height - columnHeight * value;
  const getChar = (value: number) => (value === data.length - 1 ? '' : 'L');
  const getPoint = (x: number, y: number) => `${getX(x)} ${getY(y)}`;
  const stroke = LineColors[colors][type];
  const fill = ShapeColors[colors];

  const getLineData = () => data.reduce((prev, { column }, i) => `${prev} ${getPoint(i, column)} ${getChar(i)}`, 'M');

  const getShapeData = () =>
    data.reduce((prev, { column }, i) => {
      if (i === data.length - 1) {
        const shape = `L${getX(i)} ${height} L${rowWidth * EDGE_SPACE[type]} ${height} Z`;
        return `${prev} ${getPoint(i, column)} ${shape}`;
      }
      return `${prev} ${getPoint(i, column)} ${getChar(i)}`;
    }, 'M');

  const getDataLineEl = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
        <path d={getLineData()} stroke={stroke} />
        <path d={getShapeData()} fill={fill} fillOpacity={0.2} />
      </svg>
    );
  };

  return <div className={cx('lineArea')}>{getDataLineEl()}</div>;
};

export default Line;
