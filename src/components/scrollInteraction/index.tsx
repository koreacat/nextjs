import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";
import Contents1 from "./Contents1";
import Contents2 from "./Contents2";
import {useScrollInteraction} from "../../util/hooks/useScrollInteraction/useScrollInteraction";

const cx = classnames.bind(styles);

const ScrollInteraction = () => {
  const {onScrollClassName, onScrollStyles} = useScrollInteraction();

  return (
    <div className={cx('container')} style={{height: '10000px'}}>
      <div className={cx('sticky')}>
        <div className={cx('slideContainer')}>
          <Contents1 onScrollStyles={onScrollStyles} onScrollClassName={onScrollClassName}/>
          <Contents2 onScrollStyles={onScrollStyles}/>
        </div>
      </div>
    </div>
  )
};

export default ScrollInteraction;
