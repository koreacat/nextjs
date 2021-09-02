import classnames from "classnames/bind";
import {observer} from "mobx-react";
import {useRef} from "react";
import {LOCATION_DATA} from "src/store/koreaMapUIStore";
import {useStores} from "src/util/storeProvider";
import {useMouseHover} from "../hooks";
import styles from "./locationList.module.scss";

const cx = classnames.bind(styles);

interface Location {
	name: string;
}

const Location = observer(({name}: Location) => {
	const {koreaMapUIStore} = useStores();
	const {isSelected, toggleLocation, currentLocation} = koreaMapUIStore;

	return (
		<li
			onClick={() => toggleLocation()}
			className={cx('location', {'hover': currentLocation === name}, {'active': isSelected(name)})}
			data-location={name}
		>
			{name}
		</li>
	)
});

const LocationList = () => {
	const {koreaMapUIStore} = useStores();
	const {setCurrentLocation} = koreaMapUIStore;
	const locationListRef = useRef(null);

	useMouseHover({ref: locationListRef, cx, setCurrentLocation});

	const list = LOCATION_DATA.map((name) => <Location key={name} name={name}/>);

	return (
		<div ref={locationListRef} className={cx('wrap')}>
			<ul className={cx('locationList')}>{list}</ul>
		</div>
	)
};

export default LocationList;
