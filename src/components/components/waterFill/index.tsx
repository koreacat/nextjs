import {useEffect, useRef, useState} from 'react';
import styles from './waterFill.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export type CULTURE_TYPE =
  'POSITIVE' | //긍정문화
  'PERFORMANCE' | //성과문화
  'VALUE'; //가치문화

interface WaterIntervalProps {
  water: HTMLDivElement | null,
  waterCover: HTMLDivElement | null,
  count: number,
  setCount: (count: number) => void,
  average: number
}

interface WaterFillProps {
  title: string;
  average: number;
  type: CULTURE_TYPE | string;
}

const WaterFill = (props: WaterFillProps) => {
  const [count, setCount] = useState(0);
  const water = useRef<HTMLDivElement>(null);
  const waterCover = useRef<HTMLDivElement>(null);
  const {title, average, type} = props;
  let interval: NodeJS.Timeout | null = null;

  const waterInterval = (props: WaterIntervalProps) => {
    interval && clearInterval(interval);

    const {water, waterCover, count, setCount, average} = props;
    const isFill = average > count;
    let percent = count;
    let translateValue = average >= 100 ? 100 : average <= 0 ? 0 : average;
    const diff = Math.abs(count - translateValue);

    if (average === count || !waterCover || !water) return;

    waterCover.style.transform = 'translate(0, 8%)';
    water.style.transition = `all linear ${(diff * 60 / 1000) + 0.2}s`;
    water.style.transform = `translate(0, ${100 - translateValue}%)`;

    interval = setInterval(() => {
      setCount(isFill ? ++percent : --percent);
      if ((isFill ? (percent >= average) : (percent <= average)) || (percent >= 100) || (percent <= 0)) {
        waterCover.style.transform = 'translate(0, 0%)';
        interval && clearInterval(interval);
        interval = null;
      }
    }, 60);
  };

  useEffect(() => {
    waterInterval({
      water: water.current,
      waterCover: waterCover.current,
      count,
      setCount,
      average
    });

    return (() => {
      clearInterval(interval);
    })
  }, [average, type]);

  return (
    <div className={cx('waterFill')}>
      <div className={cx('box', type)}>
        <div ref={water} className={cx('water')}>
          <svg viewBox='0 0 560 20' className={cx('wave', 'back')}>
            <Wave/>
          </svg>
          <svg viewBox='0 0 560 20' className={cx('wave', 'front')}>
            <Wave/>
          </svg>
          <div ref={waterCover} className={cx('wave', 'cover')}/>
        </div>
        <div className={cx('waterText')}>
          <div className={cx('percentArea')}>
            <span className={cx('num')}>{count}</span>
            <span className={cx('per')}>%</span>
          </div>
          <span className={cx('title')}>{title}</span>
        </div>
      </div>
    </div>
  )
};

const Wave = () => {
  return (
    <path
      d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420Z M420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420Z M140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z M140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140Z"/>
  )
};

export default WaterFill;
