import classnames from "classnames/bind";
import styles from "../stickyScroll.module.scss";

const cx = classnames.bind(styles);

const Banner = () => {
  return (
    <div className={cx('banner')}/>
  )
};

export default Banner;
