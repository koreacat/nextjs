import classnames from "classnames/bind";
import styles from "./test.module.scss";

const cx = classnames.bind(styles);

const dataList = ['카카오게임즈 오피스 스페이스', '취향에 맞는 공간에서 일하는 오피스', '2020년 카카오 페이 오피스에서 진행'];

const Test04 = () => {
  const cardListEl = dataList.map((data, index) => {
    return (
      <div className={cx('card')}>
        <img className={cx('img')}/>
        <span className={cx('desc')}>{data}</span>
      </div>
    )
  });

  return (
    <div className={cx('cardWrap')}>
      {cardListEl}
    </div>
  )
};

export default Test04;
