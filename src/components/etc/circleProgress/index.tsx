import styles from './circleProgress.module.scss';
import classnames from 'classnames/bind';
import {useEffect, useState} from "react";

const cx = classnames.bind(styles);

type COLOR_TYPE = 'YELLOW' | 'LIME' | 'GREEN' | 'SKY' | 'BLUE';

interface CircleProgressProps {
  r: number;
  title?: string;
  percent: number;
  colorType?: COLOR_TYPE;
}

const CircleProgress = (props: CircleProgressProps) => {
  const [count, setCount] = useState(0);
  let {r, title, percent, colorType} = props;
  percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
  const strokeWidth = 9;

  const d = r * 2;
  const l = Math.round(d * Math.PI);
  const strokeDashoffset = Math.round(l - (l * count) / 100);

  useEffect(() => {
    setCount(Math.round(percent));
  }, [percent]);

  const circleStyle = {
    strokeDasharray: l,
    transform: `translate(${strokeWidth / 2}px, ${strokeWidth / 2}px)`
  };

  return (
    <div className={cx('circleProgress')}>
      <svg
        className={cx('circleWrap', colorType)}
        style={{
          width: d + strokeWidth,
          height: d + strokeWidth
        }}
      >
        <circle
          className={cx('circle', 'back')}
          cx={r} cy={r} r={r}
          style={{
            strokeWidth: strokeWidth,
            ...circleStyle
          }}
        />
        <circle
          className={cx('circle', 'border')}
          cx={r} cy={r} r={r}
          style={{
            strokeWidth: strokeWidth,
            strokeDashoffset: strokeDashoffset,
            ...circleStyle
          }}
        />
        <circle
          className={cx('circle', 'front')}
          cx={r} cy={r} r={r}
          style={{
            strokeWidth: strokeWidth - 2,
            strokeDashoffset: strokeDashoffset,
            ...circleStyle
          }}
        />
      </svg>
      <div className={cx('text')}>
        <span className={cx('title')}>{title}</span>
        <span className={cx('num')}>{count}%</span>
      </div>

    </div>
  )
};

export default CircleProgress;
