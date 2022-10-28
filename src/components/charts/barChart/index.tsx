import styles from './barChart.module.scss';
import classnames from 'classnames/bind';
import BarChartType03 from './type03';

const cx = classnames.bind(styles);

const BarChart = () => {

  const million = 1000000;

  const barChartData = () => {
    return [
      {
        value: 35 * million * 100,
        name: '35억',
        row: '2018',
      },
      {
        value: 135 * million * 100,
        name: '135억',
        row: '2019',
      },
      {
        value: -999999999999,
        name: '엌ㅋㅋ',
        row: '2020',
      },
      {
        value: 9999999999999,
        name: '엌ㅋㅋ',
        row: '2021',
      },
    ]
  }

  const barChartData2 = () => {
    return [
      {
        value: -35 * million * 100,
        name: '-35억',
        row: '2018',
      },
      {
        value: -135 * million * 100,
        name: '-135억',
        row: '2019',
      },
      {
        value: 999999999999,
        name: '엌ㅋㅋ',
        row: '2020',
      },
      {
        value: -9999999999999,
        name: '엌ㅋㅋ',
        row: '2021',
      },
    ]
  }

  const barChartData3 = () => {
    return [
      {
        value: -35 * million * 100,
        name: '-35억',
        row: '2018',
      },
      {
        value: -135 * million * 100,
        name: '-135억',
        row: '2019',
      },
      {
        value: -210 * million * 100,
        name: '-210억',
        row: '2020',
      },
      {
        value: -240 * million * 100,
        name: '-240억',
        row: '2021',
      },
    ]
  }

  return (
    <div className={cx('wrap')}>
      <div className={cx('chartWrap')}>
        <BarChartType03 data={barChartData()}/>
      </div>
      
      <div className={cx('chartWrap')}>
        <BarChartType03 data={barChartData2()}/>
      </div>

      {/*<div className={cx('chartWrap')}>*/}
      {/*  <BarChartType03 data={barChartData3()}/>*/}
      {/*</div>*/}

      {/*<div className={cx('chartWrapS')}>*/}
      {/*  <BarChartType03 data={barChartData()} type={'small'}/>*/}
      {/*</div>*/}

      {/*<div className={cx('chartWrapS')}>*/}
      {/*  <BarChartType03 data={barChartData2()} type={'small'}/>*/}
      {/*</div>*/}

      {/*<div className={cx('chartWrapS')}>*/}
      {/*  <BarChartType03 data={barChartData3()} type={'small'}/>*/}
      {/*</div>*/}
    </div>
  )
};

export default BarChart;
