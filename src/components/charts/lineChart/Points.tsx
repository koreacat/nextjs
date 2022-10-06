import classnames from "classnames/bind";
import styles from "./lineChart.module.scss";
import {ChartData, EDGE_SPACE, LineChartType} from "./data";

const cx = classnames.bind(styles);

interface PointsProps {
  data: ChartData[];
  type?: LineChartType;
  onIndex: number;
  handleClick: (index: number) => void;
  columnHeight: number;
  maxRow: number;
}

const pointsAnimationDelay = [
  0, 0.1, 0.2, 0.3, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75
];

const Points = ({data, type, onIndex, handleClick, columnHeight, maxRow}: PointsProps) => {

  const getDataEl = () => {
    const dataEl = data.map((d, index) => {
      const {column, toolTip, toolTipPosition = 'top'} = d;
      const isOn = index === onIndex;

      const getLine = () => {
        if (!isOn) return null;
        return (
          <i
            className={cx('line')}
            style={{
              height: `${column * columnHeight}px`,
              animationDelay: `0.8s`
            }}
          />
        )
      }

      return (
        <div
          key={index}
          className={cx('dataWrap', type, {on: isOn})}
          style={{
            width: index === 0 ? `${EDGE_SPACE * 100}%` : '100%',
            zIndex: data.length - index
          }}
        >
          {getLine()}
          <a
            className={cx('dataBtn')}
            style={{
              transform: `translateY(-${column * columnHeight}px)`,
              animationDelay: `${pointsAnimationDelay[index]}s`
            }}
            onClick={() => handleClick(index)}
            role="button"
          >
            <div className={cx('tooltipArea', toolTipPosition, {on: isOn})}>
              {toolTip}
            </div>
          </a>
        </div>
      );
    });

    const emptyDataEl = new Array(maxRow - data.length)
      .fill(null)
      .map((_, index) => <div key={index} className={cx('dataWrap', 'empty')}/>);

    return (
      <>
        {dataEl}
        {emptyDataEl}
        <div className={cx('dataWrap', 'empty')} style={{width: `${EDGE_SPACE * 100}%`}}/>
      </>
    );
  };

  return <div className={cx('pointsArea')}>{getDataEl()}</div>;
}

export default Points;