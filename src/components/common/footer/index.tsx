import Link from "next/link";
import styles from './footer.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
			<div className={cx('textWrap')}>
				{/* <span className={cx('text')}>Copyright 2021. 지경민 All rights reserved. </span> */}
			</div>
        </footer>
    )
};

export default Footer;
