import styles from './type02.module.scss';
import classnames from 'classnames/bind';
import {useEffect, useState} from 'react';

const cx = classnames.bind(styles);

type INTERACTION_TRIGGER = true | false;

interface Bar {
  title?: string;
  color?: 'GREEN' | 'GRAY';
  value?: number;
  interactionTrigger?: INTERACTION_TRIGGER;
}

const Bar = ({title, color, value, interactionTrigger}: Bar) => {
  const [count, setCount] = useState(56);
  let timeout;

  useEffect(() => {
    interactionTrigger ?
      timeout = setTimeout(() => {
        setCount(value);
      }, 550) : setCount(56);

    return (() => {
      clearTimeout(timeout);
    })
  }, [interactionTrigger, value]);

  const onClick = () => {
  };

  return (
    <div className={cx('barWrap')}>
      <span className={cx('title')}>{title}</span>
      <div className={cx('bar')} onClick={onClick}>
        <div className={cx('valueWrap')}>
          <div className={cx('value', color, {'bigger': interactionTrigger})} style={{width: count}}/>
        </div>
        <div className={cx('per', {'show': interactionTrigger})}>0%</div>
      </div>
    </div>
  )
}

interface BarChartType02 {
  interactionTrigger?: INTERACTION_TRIGGER;
}

const BarChartType02 = ({interactionTrigger}: BarChartType02) => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('barChart')}>
        <Bar title={'경영지원'} color={'GREEN'} value={334} interactionTrigger={interactionTrigger}/>
        <Bar title={'연구˙개발'} value={192} interactionTrigger={interactionTrigger}/>
        <Bar title={'서비스'} value={150} interactionTrigger={interactionTrigger}/>
      </div>
    </div>
  )
};

export default BarChartType02;
