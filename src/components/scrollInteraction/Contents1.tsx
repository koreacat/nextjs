import {IAnimationData} from "../../util/scrollAnimation/data";
import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";

const cx = classnames.bind(styles);

const Contents1 = ({addAnimation}) => {
  const initData = {
    top: 500,
    bottom: 1900,
    topStyle: {
      opacity: 0,
      translateY: 60
    },
    bottomStyle: {
      opacity: 0,
      translateY: -60
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

  const handleAnimation = (ref) => {
    addAnimation({key: 'sl1', ref, initData, animationData})
  };

  return (
    <div className={cx("slide")} ref={handleAnimation}>
      <div className={cx("bigText")}>
        <p>JOBDA - JOBDA - JOBDA</p>
      </div>
    </div>
  )
};

export default Contents1;
