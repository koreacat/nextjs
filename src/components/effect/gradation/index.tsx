import styles from './gradation.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Gradation = () => {
    return (
        <div className={cx('wrap')}>
            Gradation
        </div>
    )
}

export default Gradation;