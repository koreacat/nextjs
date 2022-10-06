import classnames from "classnames/bind";
import styles from "./lineChart.module.scss";
import {ChartData, EDGE_SPACE, LineChartType} from "./data";

const cx = classnames.bind(styles);

interface PointsProps {
  data: ChartData[];
  type?: LineChartType;
  onIndex: number;
  setOnIndex: (onIndex: number) => void;
  columnHeight: number;
  maxRow: number;
}

const Points = ({ data, type, onIndex, setOnIndex, columnHeight, maxRow }: PointsProps) => {

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
          style={{
            width: index === 0 ? `${EDGE_SPACE * 100}%` : '100%',
            zIndex: data.length - index
          }}
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
        <div className={cx('dataWrap', 'empty')} style={{ width: `${EDGE_SPACE * 100}%`}} />
      </>
    );
  };

  return <div className={cx('pointsArea')}>{getDataEl()}</div>;
}

export default Points;