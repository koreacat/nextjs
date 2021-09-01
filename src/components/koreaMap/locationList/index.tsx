import classnames from "classnames/bind";
import { observer } from "mobx-react";
import { LOCATION_DATA } from "src/store/koreaMapUIStore";
import { useStores } from "src/util/storeProvider";
import styles from "./locationList.module.scss";

const cx = classnames.bind(styles);

interface Location {
    name: string;
}

const Location = observer(({name}: Location) => {
    const {koreaMapUIStore} = useStores();
    const {isSelected, toggleLocation} = koreaMapUIStore;

    return (
        <li 
            onClick={() => toggleLocation(name)} 
            className={cx('location', {'active': isSelected(name)})}
        >
            {name}
        </li>
    )
})

const LocationList = () => {
    const list = LOCATION_DATA.map((name) => {
        return <Location key={name} name={name}/>
    })

    return (
        <div className={cx('wrap')}>
            <ul className={cx('locationWrap')}>{list}</ul>
        </div>
    )
}

export default LocationList;