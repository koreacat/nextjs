import classnames from "classnames/bind";
import styles from "./map.module.scss";
import {RefObject, useRef} from "react";
import {useMouseOver} from "../hooks";
import {jejuRect, LOCATION_TYPE, PATH_DATA} from "../data";

const cx = classnames.bind(styles);

interface ILocationMapProps {
	isSelected: (name: LOCATION_TYPE) => boolean;
	toggleLocation: () => void;
	currentLocation: LOCATION_TYPE | null;
	handleSetCurrentLocation: (value: LOCATION_TYPE) => void;
}

const LocationMap = (
	{
		isSelected,
		toggleLocation,
		currentLocation,
		handleSetCurrentLocation,
	}: ILocationMapProps) => {
	const mapRef = useRef(null);

	useMouseOver({ref: mapRef, handleSetCurrentLocation});

	const handleClick = (e: React.MouseEvent<SVGElement>) => {
		const target = e.target as SVGElement;
		if (!target || !target.dataset?.location) return;
		toggleLocation();
	};

	const pathList = PATH_DATA.map((pathData) => {
		const {locationName, specialCity, path} = pathData;
		return (
			<path
				key={path}
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
		<svg ref={mapRef} className={cx('mapWrap')} onClick={e => handleClick(e)} width="265" height="320" viewBox="0 0 265 320"
			 fill="none" xmlns="http://www.w3.org/2000/svg">
			{pathList}
			{jejuRect}
		</svg>
	)
};

interface ILocationNameProps {
	toggleLocation: () => void;
	setCurrentLocation: (currentLocation: LOCATION_TYPE | null) => void;
	currentLocation: LOCATION_TYPE | null;
	namePosition: {top: number; left: number};
	nameRef: RefObject<HTMLDivElement>;
}

const LocationName = (
	{
		toggleLocation,
		setCurrentLocation,
		currentLocation,
		namePosition,
		nameRef
	}: ILocationNameProps) => {

	return (
		<div
			ref={nameRef}
			onClick={() => toggleLocation()}
			onMouseEnter={() => setCurrentLocation(currentLocation)}
			onMouseLeave={() => setCurrentLocation(null)}
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
	toggleLocation: () => void;
	setCurrentLocation: (currentLocation: LOCATION_TYPE | null) => void;
	currentLocation: LOCATION_TYPE | null;
	namePosition: {top: number; left: number};
	handleSetCurrentLocation: (value: LOCATION_TYPE) => void;
	isSelected: (name: LOCATION_TYPE) => boolean;
	nameRef: RefObject<HTMLDivElement>
}

const Map = (
	{
		toggleLocation,
		setCurrentLocation,
		currentLocation,
		namePosition,
		handleSetCurrentLocation,
		isSelected,
		nameRef,
	}: IMapProps) => {
	return (
		<div className={cx('wrap')}>
			<LocationName
				toggleLocation={toggleLocation}
				setCurrentLocation={setCurrentLocation}
				currentLocation={currentLocation}
				namePosition={namePosition}
				nameRef={nameRef}
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
