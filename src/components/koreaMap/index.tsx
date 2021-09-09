import classnames from "classnames/bind";
import { useState } from "react";
import { LOCATION_TYPE } from "./data";
import styles from "./koreaMap.module.scss";
import LocationList from "./locationList";
import Map from "./map";

const cx = classnames.bind(styles);

interface IKoreaMapProps {
	selectedLocations: Array<LOCATION_TYPE>;
	setSelectedLocations: (selectedLocations) => void;
}

const KoreaMap = ({selectedLocations, setSelectedLocations}: IKoreaMapProps) => {
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
