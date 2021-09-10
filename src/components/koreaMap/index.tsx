import classnames from "classnames/bind";
import {useRef, useState} from "react";
import {LOCATION_TYPE} from "./data";
import styles from "./koreaMap.module.scss";
import LocationList from "./locationList";
import Map from "./map";
import { getViewPortPosition } from "./util";

const cx = classnames.bind(styles);

interface IKoreaMapProps {
	selectedLocations: LOCATION_TYPE[];
	setSelectedLocations: (selectedLocation: ((prev: LOCATION_TYPE[]) => LOCATION_TYPE[]) | LOCATION_TYPE[]) => void;
}

const KoreaMap = (
	{
		selectedLocations,
		setSelectedLocations
	}: IKoreaMapProps) => {
	const [currentLocation, setCurrentLocation] = useState<LOCATION_TYPE | null>(null);
	const [namePosition, setNamePosition] = useState({top: 0, left: 0});
	const nameRef = useRef<HTMLDivElement>(null);

	const isSelected = (name: LOCATION_TYPE) => {
		return selectedLocations.includes(name);
	};

	const toggleLocation = () => {
		if(!currentLocation) return;
		if (selectedLocations.includes(currentLocation)) {
			setSelectedLocations(selectedLocations.filter((location) => location !== currentLocation))
		} else {
			setSelectedLocations((prev) => [...prev, currentLocation]);
		}
	};

	const handleSetCurrentLocation = (value: LOCATION_TYPE) => {
		setCurrentLocation(value);
		handleSetNamePosition(value);
	};

	const handleSetNamePosition = (value: LOCATION_TYPE) => {
		if (!value || !nameRef) return;
		const target = document.querySelector(`path[data-location=${value}]`);
		const cr = target?.getBoundingClientRect();
		const nameWidth = nameRef.current?.getBoundingClientRect().width;

		// SVG Element는 offsetTop과 같은 상대적 위치를 제공하는 API가 존재하지 않기 때문에,
		// SVG에서의 상대적 위치값을 따로 계산해줘야함
		if(!target) return;
		const newPosition = getViewPortPosition(target);

		if(!cr || !nameWidth || !newPosition) return;
		setNamePosition({
			top: newPosition.top + cr.height / 2 - 40,
			left: newPosition.left + cr.width / 2 - nameWidth / 2
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
				nameRef={nameRef}
			/>
		</div>
	)
};

export default KoreaMap;
