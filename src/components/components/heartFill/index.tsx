import {useEffect, useRef, useState} from 'react';
import styles from './hearthFill.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const heartClipPath = "M24.0748 101.514L24.0516 101.491C8.35072 85.8073 0 69.5004 0 51.8627C0 23.2461 23.3213 0 51.8842 0C68.2024 0 83.3983 7.76195 93.0951 20.5416C102.799 7.75562 118.022 0 134.497 0C163.072 0 186.2 23.2626 185.999 51.8795C185.994 69.6616 177.872 85.9736 161.924 101.514L100.481 162.89C96.3283 167.039 89.6669 167.037 85.517 162.881L83.3333 160.694L83.3245 160.685C68.0859 145.422 30.2079 107.484 24.0983 101.537L24.0748 101.514Z";

export type CULTURE_TYPE =
  'POSITIVE' | //긍정문화
  'PERFORMANCE' | //성과문화
  'VALUE'; //가치문화

interface HeartIntervalProps {
  water: HTMLDivElement | null,
  waterCover: HTMLDivElement | null,
  count: number,
  setCount: (count: number) => void,
  average: number
}

interface HeartFillProps {
  title: string;
  average: number;
  type: CULTURE_TYPE | string;
}

const HeartFill = (props: HeartFillProps) => {
  const [count, setCount] = useState(0);
  const water = useRef<HTMLDivElement>(null);
  const waterCover = useRef<HTMLDivElement>(null);
  const {title, average, type} = props;
  let interval: NodeJS.Timeout | null = null;

  const heartInterval = (props: HeartIntervalProps) => {
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
    heartInterval({
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
    <div className={cx('heartFill')}>
      <div className={cx('heartWrap', type)} style={{clipPath: `path("${heartClipPath}")`}}>
        <svg className={cx('heartShapeWrap')} width="176" height="156" viewBox="0 0 176 156" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path className={cx('heartShape')}
                d="M46.8833 0.0614014C21.0669 0.0614014 0.03125 21.0742 0.03125 46.8627C0.03125 62.7178 7.48934 77.8089 22.5967 92.8999C29.0582 99.1888 70.6864 140.893 84.0596 154.287C86.2473 156.478 89.7513 156.48 91.9418 154.292C105.346 140.902 147.104 99.1895 153.4 92.8999C168.699 77.9999 175.966 62.9089 175.966 46.8627C176.157 21.0742 155.312 0.0614014 129.496 0.0614014C112.285 0.0614014 96.6039 9.42166 88.3809 24.3217L87.9984 24.8947L87.8072 24.3217C79.5842 9.42166 63.9031 0.0614014 46.8833 0.0614014Z"/>
        </svg>

        <div ref={water} className={cx('water')}>
          <svg viewBox='0 0 560 20' className={cx('wave', 'back')}>
            <Wave/>
          </svg>
          <svg viewBox='0 0 560 20' className={cx('wave', 'front')}>
            <Wave/>
          </svg>
          <div ref={waterCover} className={cx('wave', 'cover')}/>
        </div>

        <svg className={cx('heartBorderWrap')} width="186" height="166" viewBox="0 0 186 166" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path className={cx('heartBorder')}
                d="M24.0748 101.514L24.0516 101.491C8.35072 85.8073 0 69.5005 0 51.8627C0 23.2461 23.3213 0 51.8842 0C68.2024 0 83.3983 7.76195 93.0951 20.5416C102.799 7.75562 118.022 0 134.497 0C163.072 0 186.2 23.2626 185.999 51.8795C185.994 69.6616 177.872 85.9736 161.924 101.514L100.481 162.89C96.3283 167.039 89.6669 167.037 85.517 162.881L83.3333 160.694C68.1005 145.437 30.209 107.485 24.0983 101.537L24.0748 101.514ZM158.401 97.8999C173.7 82.9999 180.967 67.9089 180.967 51.8627C181.158 26.0742 160.313 5.06142 134.497 5.06142C119.031 5.06142 104.8 12.6201 96.1064 24.965C95.2269 26.2139 94.404 27.5119 93.6423 28.8559C93.5994 28.9316 93.5568 29.0074 93.5143 29.0833C93.4699 29.1626 93.4258 29.2421 93.3818 29.3217L92.9994 29.8948L92.8081 29.3217C92.7221 29.1658 92.6353 29.0106 92.5476 28.8559C92.5177 28.8031 92.4876 28.7503 92.4575 28.6976C91.7211 27.4098 90.9284 26.1647 90.0836 24.9648C81.3919 12.62 67.1785 5.06142 51.8842 5.06142C26.0678 5.06142 5.03216 26.0742 5.03216 51.8627C5.03216 67.7178 12.4902 82.8089 27.5977 97.8999C33.7366 103.875 71.6194 141.818 86.8548 157.078L89.0677 159.295C91.255 161.485 94.7454 161.487 96.9355 159.299L158.401 97.8999Z"/>
        </svg>

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

export default HeartFill;
