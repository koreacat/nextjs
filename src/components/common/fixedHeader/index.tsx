import {useEffect, useState} from "react";
import Header from "../header";
import styles from './fixedHeader.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const FixedHeader = () => {
  let lastScrollTop = 0;
  const [scrollUp, setScrollUp] = useState(true);

  const scrollEvent = function (e: Event) {
    e.preventDefault();
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    lastScrollTop = (st <= 0 ? 0 : st);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent, false);
    return (() => {
      document.removeEventListener('scroll', scrollEvent);
    });
  }, []);

  return (
    <div className={cx('fixedHeader', scrollUp && 'up')}>
      <Header/>
    </div>
  )
};

export default FixedHeader;
