import classnames from "classnames/bind";
import styles from "./guide.module.scss";

const cx = classnames.bind(styles);

const Guide = () => {

  return (
    <div className={cx('wrap')}>
      <div className={cx('textWrap')}>
        <div className={cx('titleWrap')}>
          <span>스펙이 아닌</span>
          <span className={cx('em')}>역량으로.</span>
        </div>
        <div className={cx('descWrap')}>
          <span className={cx('highlight')}>면접 질문 가이드</span>
          <div className={cx('desc')}>
            <span>스펙이 아닌 지원자 역량 기반</span>
            <span>면접 질문 가이드가 기업에 전달돼요.</span>
            <span>꼬리를 무는 질문, 스펙만 묻는 질문이 아닌</span>
          </div>
          <span className={cx('bold')}>“진짜 나를 표현할 수 있는 면접이 될 수 있어요.”</span>
        </div>
      </div>
      <div className={cx('cardWrap')}>
        <div className={cx('card')}>
          <img className={cx('img')} src={'https://placedog.net/544/256?random'}/>
        </div>
        <div className={cx('card')}>
          <img className={cx('img')} src={'https://placedog.net/544/256?random'}/>
        </div>
      </div>
    </div>
  )
}

export default Guide;
