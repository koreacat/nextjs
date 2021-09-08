import classnames from "classnames/bind";
import { useState } from "react";
import styles from "./koreaMap.module.scss";
import LocationList from "./locationList";
import Map from "./map";

const cx = classnames.bind(styles);

export type LOCATION_TYPE =
	'서울특별시' | '경기도' | '인천광역시' | '부산광역시' |
	'대구광역시'| '광주광역시'| '대전광역시'| '울산광역시'|
	'세종특별자치시'| '강원도'| '충청남도'| '경상남도'|
	'경상북도'| '전라남도'| '전라북도'| '충청북도'|
	'제주특별자치도';

const KoreaMap = () => {
	const [selectedLocations, setSelectedLocations] = useState(new Array<LOCATION_TYPE>());
	const [currentLocation, setCurrentLocation] = useState(null);
	const [namePosition, setNamePosition] = useState({top: 0, left: 0});
	
	const isSelected = (name: LOCATION_TYPE) => {
		return selectedLocations.includes(name);
	};

	const toggleLocation = () => {
		if(selectedLocations.includes(currentLocation)) {
			setSelectedLocations(selectedLocations.filter((location) => location !== currentLocation))
		} else {
			setSelectedLocations([...selectedLocations, currentLocation]);
		}
	};

	const handleSetCurrentLocation = (value: string) => {
		setCurrentLocation(value);
		handleSetNamePosition(value);
	};

	const handleSetNamePosition = (value) => {
		if(!value) return;
		const target = document.querySelector(`path[data-location=${value}]`);
		const cr = target.getBoundingClientRect();
		const nameRef = document.getElementById('locationName');
		const nameWidth = nameRef.getBoundingClientRect().width;

		setNamePosition({
			top: cr.y + cr.height / 2 - 40,
			left: cr.x + cr.width / 2 - nameWidth / 2
		});
	};

	return (
		<div className={cx('wrap')}>
			<LocationList
				isSelected={isSelected}
				toggleLocation={toggleLocation}
				currentLocation={currentLocation}
				handleSetCurrentLocation={handleSetCurrentLocation}
			/>
			<Map
				toggleLocation={toggleLocation}
				setCurrentLocation={setCurrentLocation}
				currentLocation={currentLocation}
				namePosition={namePosition}
				handleSetCurrentLocation={handleSetCurrentLocation}
				isSelected={isSelected}
			/>
		</div>
	)
};

export default KoreaMap;
