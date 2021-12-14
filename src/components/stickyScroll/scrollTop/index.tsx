import classnames from "classnames/bind";
import styles from "../stickyScroll.module.scss";

const cx = classnames.bind(styles);

const ScrollTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick} className={cx('scrollTop')}/>
  )
};

export default ScrollTop;
