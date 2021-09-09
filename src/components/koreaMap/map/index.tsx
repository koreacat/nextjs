import classnames from "classnames/bind";
import styles from "./map.module.scss";
import { useRef } from "react";
import { useMouseOver } from "../hooks";
import { jejuRect, PATH_DATA } from "../data";

const cx = classnames.bind(styles);

interface ILocationMapProps {
	isSelected;
	toggleLocation;
	currentLocation;
	handleSetCurrentLocation;
}

const LocationMap = ({
		isSelected,
		toggleLocation,
		currentLocation,
		handleSetCurrentLocation,
	}: ILocationMapProps) => {
	const mapRef = useRef(null);

	useMouseOver({ref: mapRef, handleSetCurrentLocation});

	const handleClick = (e) => {
		if (!e.target.dataset.location) return;
		toggleLocation();
	};

	const pathList = PATH_DATA.map((pathData, index) => {
		const {locationName, specialCity, path} = pathData;
		return (
			<path
				key={index}
				className={cx(
					{'em': specialCity},
					{'hovered': currentLocation === locationName},
					{'selected': isSelected(locationName)}
				)}
				data-location={locationName} d={path}
			/>
		)
	});

	return (
		<svg ref={mapRef} className={cx('mapWrap')} onClick={handleClick} width="265" height="320" viewBox="0 0 265 320" fill="none" xmlns="http://www.w3.org/2000/svg">
			{pathList}
			{jejuRect}
		</svg>
	)
};

interface ILocationNameProps {
	toggleLocation;
	setCurrentLocation;
	currentLocation;
	namePosition;
}

const LocationName = ({
		toggleLocation,
		setCurrentLocation,
		currentLocation,
		namePosition,
	}: ILocationNameProps) => {

	return (
		<div
			id='locationName'
			onClick={() => toggleLocation()}
			onMouseEnter={() => setCurrentLocation(currentLocation)}
			onMouseLeave={() => setCurrentLocation('')}
			className={cx('name')}
			style={{
				display: currentLocation ? 'block' : 'none',
				top: `${namePosition.top}px`,
				left: `${namePosition.left}px`
			}}>
			{currentLocation}
		</div>
	)
};

interface IMapProps {
	toggleLocation;
	setCurrentLocation;
	currentLocation;
	namePosition;
	handleSetCurrentLocation;
	isSelected;
}

const Map = ({
		toggleLocation,
		setCurrentLocation,
		currentLocation,
		namePosition,
		handleSetCurrentLocation,
		isSelected,
	}: IMapProps) => {
	return (
		<div className={cx('wrap')}>
			<LocationName 
				toggleLocation={toggleLocation}
				setCurrentLocation={setCurrentLocation}
				currentLocation={currentLocation}
				namePosition={namePosition}
			/>
			<LocationMap 
				isSelected={isSelected}
				toggleLocation={toggleLocation}
				currentLocation={currentLocation}
				handleSetCurrentLocation={handleSetCurrentLocation}
			/>
		</div>
	)
};

export default Map;
