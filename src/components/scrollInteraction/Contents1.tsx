import classnames from "classnames/bind";
import styles from "./scrollInteraction.module.scss";
import {OnScrollStyles, StyleData} from "../../util/hooks/useScrollInteraction/data/styleData";
import {OnScrollClassName} from "../../util/hooks/useScrollInteraction/data/classData";

const cx = classnames.bind(styles);

interface Contents1Props {
  onScrollStyles: OnScrollStyles,
  onScrollClassName: OnScrollClassName,
}

const Contents1 = ({onScrollStyles, onScrollClassName}: Contents1Props) => {
  const initStyleData = {
    top: () => 500,
    bottom: () => 1900,
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
      top: () => 500,
      bottom: () => 1900,
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
      top: () => 500,
      bottom: () => 800,
      easing: 'ease',
      styles: {
        opacity: {
          topValue: 0,
          bottomValue: 1,
        }
      }
    },
    {
      top: () => 800,
      bottom: () => 1400,
      easing: 'liner',
      styles: {
        opacity: {
          topValue: 1,
          bottomValue: 1,
        }
      }
    },
    {
      top: () => 1400,
      bottom: () => 1900,
      easing: 'easeIn',
      styles: {
        opacity: {
          topValue: 1,
          bottomValue: 0,
        }
      }
    }
  ];

  const classNameData = {
    top: () => 800,
    bottom: () => 1400,
    className: cx('on'),
    reverse: true
  };

  const handleAnimation = (ref) => {
    onScrollStyles({el: ref, initStyleData, styleDataArr})
  };

  const handleClass = (ref) => {
    onScrollClassName({el: ref, classNameData});
  };

  return (
    <div ref={handleAnimation} className={cx("slide")}>
      <div ref={handleClass} className={cx("bigText")}>
        <p>JOBDA - JOBDA - JOBDA</p>
      </div>
    </div>
  )
};

export default Contents1;
