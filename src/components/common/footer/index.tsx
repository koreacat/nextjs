import Link from "next/link";
import styles from './footer.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
			{/* <Link href={"/"}>
				<div>
					<a>footer</a>
				</div>
			</Link> */}
        </footer>
    )
};

export default Footer;
