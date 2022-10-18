import styles from './type03.module.scss';
import classnames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';

const cx = classnames.bind(styles);

export type BarChartSizeType = 'small' | 'large';

interface BarChartData {
  value: number;
  name: string;
  row: string;
}

interface BarChartType03Props {
  type?: BarChartSizeType;
  data: BarChartData[];
  line?: number;
}

const getSubText = ({lastYearValue, thisYearValue}: {lastYearValue?: number, thisYearValue: number}) => {
  if(!lastYearValue || (lastYearValue === thisYearValue)) return '전년대비 보합';
  if(lastYearValue < thisYearValue) return <> 전년대비 상승<ArrowUp/></>;
  if(lastYearValue > thisYearValue) return <>전년대비 하락<ArrowDown/></>;
}

const BarChartType03 = ({ type = 'large', data, line = 6 }: BarChartType03Props) => {
  const [zeroLineIndex, setZeroLineIndex] = useState(0);
  const [columnHeight, setColumnHeight] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const min = Math.min(...data.map(d => d.value), 0);
  const max = Math.max(...data.map(d => d.value), 0);
  const capacity = Math.abs(max - min);
  const minPer = Math.abs(min / capacity);

  useEffect(() => {
    setZeroLineIndex(line - Math.round(minPer * (line - 1)) - 1);
    init();
  }, [data]);

  const init = () => {
    setTimeout(() => {
      if(wrapRef && wrapRef.current){
        setColumnHeight(wrapRef.current.clientHeight * ((line - 1) / line));
      }
    }, 0)
  }

  const getBar = () => data.map(({ value, name }, i) => {
    const isReverse = value < 0;
    const isLast = i === data.length - 1;

    return (
      <div key={i} className={cx('barWrap')}>
        <div
          className={cx('bar', type, { reverse: isReverse })}
          style={{ height: `${Math.abs(value / capacity) * columnHeight}px` }}
        >
          <span className={cx('tooltip')}>
            {name}
            {
              isLast &&
              <span className={cx('subText')}>
                {
                  getSubText({
                    lastYearValue: data[data.length - 2]?.value, 
                    thisYearValue: data[data.length - 1]?.value
                  })
                }
                
              </span>
            }
          </span>
          
        </div>
      </div>
    )
  })

  const getDividerEl = () => new Array(line).fill(null).map((_, i) => {
    const isOn = zeroLineIndex === i;

    return (
      <div key={i} className={cx('divider', { on: isOn }, type)}>
        {isOn && getBar()}
      </div>
    )
  })

  const getRowsEl = () => {
    return (
      <div className={cx('rowWrap', type)}>
        {data.map((d, i) => <span key={i} className={cx('row')}>{d.row}</span>)}
      </div>
    )
  }

  if (!data || data.length === 0) return null;

  return (
    <div ref={wrapRef} className={cx('wrap')}>
      {getDividerEl()}
      {getRowsEl()}
    </div>
  )
}

export default BarChartType03;