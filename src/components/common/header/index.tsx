import React from "react";
import styles from './header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <a className={cx('text')} href={'https://koreacat.github.io/'}>Project</a>
    </header>
  )
};

export default Header;
