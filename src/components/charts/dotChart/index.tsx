import styles from './dotChart.module.scss';
import classnames from 'classnames/bind';
import {useState} from "react";

const cx = classnames.bind(styles);


const Arrow = () => {
  return (
    <>
      <i className={cx('arrow', 'top')}/>
      <i className={cx('arrow', 'right')}/>
    </>
  )
};

const Line = () => {
  return (
    <>
      <i className={cx('line', 'horizontal')}/>
      <i className={cx('line', 'vertical')}/>
    </>
  )
};

const Category = () => {
  return (
    <>
      <span className={cx('category', 'leftTop')}>역량에 잘맞아요</span>
      <span className={cx('category', 'leftBottom')}>역량에 안맞아요</span>
      <span className={cx('category', 'bottomLeft')}>유형에 안맞아요</span>
      <span className={cx('category', 'bottomRight')}>유형에 잘맞아요</span>
    </>
  )
};

const Preference = () => {
  return (
    <>
      <div className={cx('preference', 'topLeft', 'gray')}>보통</div>
      <div className={cx('preference', 'topRight', 'green')}>추천</div>
      <div className={cx('preference', 'bottomLeft', 'red')}>비추천</div>
      <div className={cx('preference', 'bottomRight', 'gray')}>보통</div>
    </>
  )
};


interface Item {
  index: number;
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
  title: string;
  position?: { x: number, y: number };
}

const Item = ({index, activeIndex, setActiveIndex, title, position}: Item) => {
  const x = position.x < 0 ? 0 : position.x > 10 ? 10 : position.x;
  const y = position.y < 0 ? 0 : position.y > 12 ? 12 : position.y;
  const alignItems = x <= 1 ? 'flex-start' : x >= 10 ? 'flex-end' : 'center';
  const color = (x <= 5 && y <= 6) ? 'red' : (x >= 6 && y >= 7) ? 'green' : 'gray';

  const getLeft = (x: number) => {
    if (x <= 6) {
      return 16 + x * 50;
    } else {
      return 16 + (6 * 50) + ((x - 6) * 60);
    }
  };

  const getBottom = (y: number) => {
    if (y <= 6) {
      return 40 + (y - 1) * 25;
    } else {
      return 40 + (5 * 25) + ((y - 6) * 30);
    }
  };

  return (
    <div
      className={cx('item', color, {'active': index === activeIndex}, {'inActive': activeIndex >= 0 && index !== activeIndex})}
      style={{
        bottom: `${getBottom(y)}px`,
        left: `${getLeft(x)}px`,
        alignItems: alignItems
      }}
    >
      <i className={cx('point')}/>
      <span
        className={cx('title')}
        style={{
          justifyContent: alignItems
        }}
        onClick={() => setActiveIndex(index)}
      >{title}</span>
    </div>
  )
};

interface Items {
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
}

const Items = ({activeIndex, setActiveIndex}: Items) => {
  const data = [
    {x: 2, y: 11, title: '서비스/고객지원'},
    {x: 10, y: 10, title: '홍보/마케팅'},
    {x: 0, y: 9, title: '경영 기획/지원'},
    {x: 5, y: 8, title: '금융/보험'},
    {x: 9, y: 7, title: '영업'},
    {x: 2, y: 6, title: '연구/개발'},
    {x: 4, y: 5, title: '의료/보건'},
    {x: 3, y: 4, title: '건설/엔지니어'},
    {x: 2, y: 3, title: '생산/유통/품질'},
    {x: 7, y: 2, title: '디자인'},
    {x: 10, y: 1, title: 'IT 서비스'},
  ];

  const items = data.map((data, index) => {
    return (
      <Item
        key={index}
        index={index}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        title={data.title}
        position={{x: data.x, y: data.y}}
      />
    )
  });

  return <>{items}</>;
};

const DotChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={cx('wrap')}>
      <div className={cx('dotChart')}>
        <Arrow/>
        <Line/>
        <Category/>
        <Preference/>
        <Items activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      </div>
    </div>
  )
};

export default DotChart;
