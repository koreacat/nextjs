import classnames from "classnames/bind";
import {useRef} from "react";
import { LOCATION_DATA, LOCATION_TYPE } from "../data";
import {useMouseOver} from "../hooks";
import styles from "./locationList.module.scss";

const cx = classnames.bind(styles);

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
