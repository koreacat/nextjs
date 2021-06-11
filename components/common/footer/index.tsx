import Link from "next/link";
import styles from './footer.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
			<Link href={"/"}>
				<div>
					<a>index</a>
				</div>
			</Link>
        </footer>
    )
};

export default Footer;
