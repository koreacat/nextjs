import classnames from "classnames/bind";
import styles from "./process.module.scss";

const cx = classnames.bind(styles);

const Process = () => {

    return (
        <div className={cx('wrap')}>
            AI역량검사, 어떤 과정으로 진행될까요? 응시 프로세스를 소개합니다.
        </div>
    )
};

export default Process;