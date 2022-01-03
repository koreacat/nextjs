import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";
import {useScrollAnimation} from "../../util/hooks/useScrollAnimation/useScrollAnimation";
import Contents1 from "./Contents1";
import Contents2 from "./Contents2";

const cx = classnames.bind(styles);

const ScrollInteraction = () => {
  const {addAnimation} = useScrollAnimation();

  return (
    <div className={cx('container')} style={{height: '10000px'}}>
      <div className={cx('sticky')}>
        <div className={cx('slideContainer')}>
          <Contents1 addAnimation={addAnimation}/>
          <Contents2 addAnimation={addAnimation}/>
        </div>
      </div>
    </div>
  )
};

export default ScrollInteraction;
