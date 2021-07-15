import Filter from "./filter";
import Slider from "./slider";
import styles from './filterSlider.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const FilterSlider = () => {
    return (
        <div className={cx('filterSliderWrap')}>
            <Filter/>
            <Slider/>
        </div>
    )
}

export default FilterSlider;