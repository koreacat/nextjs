import styles from './lineChart.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const LineChart = () => {

  return (
    <div className={cx('lineChartArea')}>
      lineChart
    </div>
  )
}

export default LineChart;