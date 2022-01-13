import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";
import {OnScrollStyles, StyleData} from "../../util/hooks/useScrollInteraction/data/styleData";

const cx = classnames.bind(styles);

interface Contents2Props {
  onScrollStyles: OnScrollStyles,
}

const Contents2 = ({onScrollStyles}: Contents2Props) => {
  const initStyleData = {
    top: () => 2500,
    bottom: () => 3900,
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
    },
    reverse: true
  };

  const styleDataArr: StyleData[] = [
    {
      top: () => 2500,
      bottom: () => 3900,
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
      top: () => 2500,
      bottom: () => 2800,
      easing: 'ease',
      styles: {
        opacity: {
          topValue: 0,
          bottomValue: 1,
        }
      }
    },
    {
      top: () => 2800,
      bottom: () => 3400,
      easing: 'liner',
      styles: {
        opacity: {
          topValue: 1,
          bottomValue: 1,
        }
      }
    },
    {
      top: () => 3400,
      bottom: () => 3900,
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
    onScrollStyles({el: ref, initStyleData , styleDataArr})
  };

  return (
    <div className={cx("slide")} ref={handleAnimation}>
      <div className={cx("bigText")}>
        <p>UP - UP - UP</p>
      </div>
    </div>
  )
};

export default Contents2;
