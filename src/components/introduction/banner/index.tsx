import classnames from "classnames/bind";
import styles from "./banner.module.scss";

const cx = classnames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('wrap')}>
            <span className={cx('name')}>AI역량검사 | JOBDA</span>
            <div className={cx('titleWrap')}>
                <span className={cx('title')}>스펙이 아닌</span>
                <span className={cx('title')}>진짜 나를 보여줄 기회!</span>
                <span className={cx('title', 'em')}>AI역량검사를 소개합니다.</span>
            </div>
        </div>
    )
}

export default Banner;