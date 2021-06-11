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
				<div>
					<a>index</a>
				</div>
			</Link>
        </header>
    )
};

export default Header;
