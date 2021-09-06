import classnames from "classnames/bind";
import {observer} from "mobx-react";
import {useRef} from "react";
import {LOCATION_TYPE} from "src/store/koreaMapUIStore";
import {useStores} from "src/util/storeProvider";
import {useMouseOver} from "../hooks";
import styles from "./locationList.module.scss";

const cx = classnames.bind(styles);

const LOCATION_DATA: Array<LOCATION_TYPE> = [
	'서울특별시', '경기도', '인천광역시', '부산광역시',
	'대구광역시', '광주광역시', '대전광역시', '울산광역시',
	'세종특별자치시', '강원도', '충청남도', '경상남도',
	'경상북도', '전라남도', '전라북도', '충청북도',
	'제주특별자치도'
];

interface ILocationProps {
	locationName: LOCATION_TYPE;
}

const Location = observer(({locationName}: ILocationProps) => {
	const {koreaMapUIStore} = useStores();
	const {isSelected, toggleLocation, currentLocation} = koreaMapUIStore;

	return (
		<li
			onClick={() => toggleLocation()}
			className={cx(
				'location',
				{'hovered': currentLocation === locationName},
				{'selected': isSelected(locationName)}
			)}
			data-location={locationName}
		>
			{locationName}
		</li>
	)
});

const LocationList = () => {
	const {koreaMapUIStore} = useStores();
	const {setCurrentLocation} = koreaMapUIStore;
	const locationListRef = useRef(null);

	useMouseOver({ref: locationListRef, setCurrentLocation});

	const list = LOCATION_DATA.map(locationName => <Location key={locationName} locationName={locationName}/>);

	return (
		<div ref={locationListRef} className={cx('wrap')}>
			<ul className={cx('locationList')}>{list}</ul>
		</div>
	)
};

export default LocationList;
