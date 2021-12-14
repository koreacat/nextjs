import Link from "next/link";
import React from "react";
import styles from './header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface HeaderProps {

}

const Header = () => {
  return (
    <header className={cx('header')}>
      <Link href={"/"}>
        <div className={cx('textWrap')}>
          <a className={cx('text')}>Home</a>
        </div>
      </Link>
    </header>
  )
};

export default Header;
