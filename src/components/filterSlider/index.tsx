import Filter from "./filter";
import Slider from "./slider";
import styles from './filterSlider.module.scss';
import classnames from 'classnames/bind';
import { useStores } from "src/util/storeProvider";
import { observer } from "mobx-react";

const cx = classnames.bind(styles);

const FilterSlider = observer(() => {
    const {filterSliderUIStore} = useStores();
    const {selectedFilterList} = filterSliderUIStore;

    return (
        <div className={cx('filterSliderWrap')}>
            <Filter/>
            {
                selectedFilterList.length > 0 &&
                <Slider/>
            }
        </div>
    )
});

export default FilterSlider;
