import styles from './contents.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Contents = (props) => {
    return (
        <div className={cx('contents')}>
            {props.children}
        </div>
    )
};

export default Contents;