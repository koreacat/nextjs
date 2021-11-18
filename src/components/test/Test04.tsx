import classnames from "classnames/bind";
import styles from "./test.module.scss";
import {useState} from "react";

const cx = classnames.bind(styles);

const dataList = ['카카오게임즈 오피스 스페이스', '취향에 맞는 공간에서 일하는 오피스', '2020년 카카오 페이 오피스에서 진행'];

const Test04 = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const cardListEl = dataList.map((data, index) => {
    return (
      <div className={cx('card', {'enter': activeIndex === index}, {'outer': activeIndex !== -1 && activeIndex !== index})} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)}>
        <img className={cx('img')} />
        <span className={cx('desc')}>{data}</span>
      </div>
    )
  });

  return (
    <div style={{display: 'flex', height: '512px'}}>
      {cardListEl}
      <input type={'file'} accept={'.pdf'}/>
    </div>
  )
};

export default Test04;
