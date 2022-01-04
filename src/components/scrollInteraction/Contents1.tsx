import {AnimationData} from "../../util/hooks/useScrollAnimation/data";
import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";

const cx = classnames.bind(styles);

const Contents1 = ({addAnimation}) => {
  const initData = {
    top: 500,
    bottom: 1900,
    styles: {
      opacity: {
        topValue: 0,
        bottomValue: 0,
      },
      translateY: {
        topValue: 60,
        bottomValue: -60,
        unit: 'px',
      }
    }
  };

  const animationDataArr: AnimationData[] = [
    {
      top: 500,
      bottom: 1900,
      easing: 'midSlow',
      styles: {
        translateY: {
          topValue: 60,
          bottomValue: -60,
          unit: 'px',
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
          bottomValue: 1,
        }
      }
    },
    {
      top: 800,
      bottom: 1400,
      easing: 'liner',
      styles: {
        opacity: {
          topValue: 1,
          bottomValue: 1,
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
          bottomValue: 0,
        }
      }
    }
  ];

  const handleAnimation = (ref) => {
    addAnimation({ref, initData, animationDataArr})
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
