import classnames from 'classnames/bind';
import styles from './gradeChart.module.scss';
import { Fragment } from 'react';

const cx = classnames.bind(styles);

export interface ChartData {
  name: string;
  value: number;
  isOn?: boolean;
}

export interface RowData {
  name: string;
  isOn?: boolean;
}

const EmptyContents = () => {
  return (
    <tr className={cx('contentArea')}>
      <td className={cx('contents')} />
      <td className={cx('contents')} />
      <td className={cx('contents')} />
    </tr>
  );
};

interface ChartTableProps {
  chartDataArr: ChartData[];
  columnCount: number;
}

const ChartTable = ({ chartDataArr, columnCount }: ChartTableProps) => {
  const columnsEl = chartDataArr
    .map((_, index) => {
      const getColumnEl = () => {
        const { value, name, isOn } = chartDataArr[index];
        return (
          <>
            <tr key={index} className={cx('contentsArea', 'boxArea')}>
              <td className={cx('contents')} />
              <td rowSpan={value} className={cx('contents', 'boxWrap', { on: isOn })}>
                <div className={cx('textWrap', { on: isOn })}>{name}</div>
              </td>
              <td className={cx('contents')} />
            </tr>
            {value > 1 && new Array(value - 1).fill(null).map((_, index) => <EmptyContents key={index} />)}
          </>
        );
      };
      return <Fragment key={index}>{getColumnEl()}</Fragment>;
    })
    .reverse();

  const emptyCount =
    columnCount -
    chartDataArr.reduce((prev, cur) => {
      return prev + cur.value;
    }, 0);

  const emptyEl = new Array(emptyCount).fill(null).map((_, index) => <EmptyContents key={index} />);

  return (
    <table className={cx('table')}>
      <tbody>
        {emptyEl}
        {columnsEl}
      </tbody>
    </table>
  );
};

interface GradeChartProps {
  chartDataArr: ChartData[][];
  rowData: RowData[];
  columnCount: number;
}

const GradeChart = ({ chartDataArr, rowData, columnCount }: GradeChartProps) => {
  const getTableEl = () =>
    chartDataArr.map((chartData, index) => (
      <ChartTable key={index} chartDataArr={chartData} columnCount={columnCount} />
    ));

  const getRowTextEl = () => {
    const rowEls = rowData.map((item, index) => {
      const { name, isOn } = item;
      return (
        <em key={index} className={cx('rowText', { on: isOn })}>
          {name}
        </em>
      );
    });
    return <div className={cx('rowTextArea')}>{rowEls}</div>;
  };

  return (
    <div className={cx('gradeChartArea')}>
      <div className={cx('gradeChartWrap')}>{getTableEl()}</div>
      {getRowTextEl()}
    </div>
  );
};

export default GradeChart;
