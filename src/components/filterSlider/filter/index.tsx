import styles from './filter.module.scss';
import classnames from 'classnames/bind';
import { useStores } from 'src/util/storeProvider';
import { observer } from 'mobx-react';
import {filterData, IFilter} from "../data";

const cx = classnames.bind(styles);

interface FilterList {
    title: string;
    list: Array<IFilter>;
}

const FilterList = observer((props: FilterList) => {
    const {title, list} = props;
    const {filterSliderUIStore} = useStores();
    const {selectFilter, deleteFilter, existFilter} = filterSliderUIStore;

    const onChange = (filter) => {
        existFilter(filter) ? deleteFilter(filter) : selectFilter(filter);
    };

    const filterList = list.map((filter) => {
        return (
            <li key={filter.type}>
                <label className={cx('item')}>
			    	<span>{filter.text}</span>
			    	<input
                        type={'checkbox'}
                        onChange={e => onChange(filter)}
                        checked={existFilter(filter)}
                    />
		    	</label>
            </li>
        )
    });

    return (
        <div className={cx('filter')}>
            <span className={cx('filterTitle')}>{title}</span>
            <ul className={cx('filterList')}>
                {filterList}
		    </ul>
        </div>
    )
});

const Filter = () => {
    return (
        <div className={cx('filterWrap')}>
            <div className={cx('filterContents')}>
                <FilterList title={'출근'} list={filterData.ATTENDANCE}/>
                <FilterList title={'일하는 문화'} list={filterData.WORKING_CULTURE}/>
                <FilterList title={'복지 문화'} list={filterData.WELFARE_CULTURE}/>
                <FilterList title={'팀 문화'} list={filterData.TEAM_CULTURE}/>
                <FilterList title={'기업 문화'} list={filterData.COMPANY_CULTURE}/>
            </div>
            <div className={cx('filterContents')}>
                <FilterList title={'퇴근'} list={filterData.LEAVE_WORK}/>
                <FilterList title={'휴식'} list={filterData.REST}/>
                <FilterList title={'자기계발'} list={filterData.SELF_IMPROVEMENT}/>
            </div>
		</div>
    )
};

export default Filter;
