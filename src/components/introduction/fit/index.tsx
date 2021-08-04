import classnames from "classnames/bind";
import styles from "./fit.module.scss";

const cx = classnames.bind(styles);
const Fit = () => {
    return (
        <div className={cx('wrap')}>
            <div className={cx('textWrap')}>
                <div className={cx('titleWrap')}>
                    <span>성적이 아닌</span>
                    <span className={cx('em')}>적합도를.</span>
                </div>
                <div className={cx('descWrap')}>
                    <span className={cx('highlight')}>직군 적합도</span>
                    <div className={cx('desc')}>
                        <span>AI역량검사는 석차, 점수가 아닌 </span>
                        <span>직군 적합도를 더 중요하게 생각해요.</span>
                    </div>
                    <span className={cx('bold')}>“내가 어느 직군에서 더 성장할 수 있는<br/>사람인지 보여줄 수 있어요.”</span>
                </div>
            </div>
            <div className={cx('chartWrap')}>

            </div>
        </div>
    )
}

export default Fit;