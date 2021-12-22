import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";
import {useScrollAnimation} from "../../util/scrollAnimation/scrollAnimation";
import {IAnimationData} from "../../util/scrollAnimation/data";

const cx = classnames.bind(styles);

const ScrollInteraction = () => {

  const initData = {
    top: 500,
    bottom: 1900,
    topStyle: {
      opacity: 0,
      translateY: -60
    },
    bottomStyle: {
      opacity: 0,
      translateY: 60
    }
  };

  const animationData: IAnimationData[] = [
    {
      top: 500,
      bottom: 1900,
      easing: 'midSlow',
      styles: {
        translateY: {
          topValue: 60,
          bottomValue: -60
        }
      }
    },
    {
      top: 500,
      bottom: 800,
      easing: 'ease',
      styles: {
        opacity: {
          topValue: 0,
          bottomValue: 1
        }
      }
    },
    {
      top: 1400,
      bottom: 1900,
      easing: 'easeIn',
      styles: {
        opacity: {
          topValue: 1,
          bottomValue: 0
        }
      }
    }
  ];


  const {addAnimation} = useScrollAnimation();

  return (
    <div className={cx('container')} style={{height: '10000px'}}>
      <div className={cx('sticky')}>
        <div className={cx('slideContainer')}>

          <div className={cx("slide")} ref={ref => addAnimation({key: 'sl1', ref, initData, animationData})}>
            <div className={cx("bigText")}>
              <p>aaaaaaaaaaaaaaaaaaaaa</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default ScrollInteraction;
