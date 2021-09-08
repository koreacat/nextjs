import classnames from "classnames/bind";
import {useRef} from "react";
import { LOCATION_TYPE } from "..";
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
	isSelected;
	toggleLocation;
	currentLocation;
	locationName: LOCATION_TYPE;
}

const Location = ({
		isSelected,
		toggleLocation,
		currentLocation,
		locationName
	}: ILocationProps) => {

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
};

interface ILocationListProps {
	isSelected;
	toggleLocation;
	currentLocation;
	handleSetCurrentLocation: (value: string) => void;
}

const LocationList = ({
		isSelected,
		toggleLocation,
		currentLocation,
		handleSetCurrentLocation
	}: ILocationListProps) => {
	const locationListRef = useRef(null);

	useMouseOver({ref: locationListRef, handleSetCurrentLocation});

	const list = LOCATION_DATA.map(locationName => 
		<Location 
			key={locationName} 
			isSelected={isSelected}
			toggleLocation={toggleLocation}
			currentLocation={currentLocation}
			locationName={locationName}
		/>);

	return (
		<div ref={locationListRef} className={cx('wrap')}>
			<ul className={cx('locationList')}>{list}</ul>
		</div>
	)
};

export default LocationList;
