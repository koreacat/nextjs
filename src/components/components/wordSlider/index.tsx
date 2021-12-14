import classnames from "classnames/bind";
import styles from "./wordSlider.module.scss";

const cx = classnames.bind(styles);

const data = [
  '“ 코드 구조를 체계적으로 개선하여 효율적인 리팩터링 구현하기 ”',
  '“ 소스코드 버전 관리를 위한 깃 - 깃허브, 오픈소스 참여 ”',
  '“ 핵심 개념과 동작 원리로 이해하는 자바스크립트 프로그래밍 ”',
  '“ 코드 구조를 체계적으로 개선하여 효율적인 리팩터링 구현하기 ”',
];

const List = () => {

  const list = data.map((data, index) => {
    return <li key={index} className={cx('word')}>{data}</li>;
  });

  return (
    <ul className={cx('words')}>
      {list}
    </ul>
  )
};

const WordSlider = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('slider')}>
        <List/>
      </div>
    </div>
  )
};

export default WordSlider;
