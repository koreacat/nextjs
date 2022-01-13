import {ALL_LOCATIONS, LocationNameMap, LOCATION_TYPE} from "@domain/location";
import classnames from "classnames/bind";
import {useRef} from "react";
import {useMouseOver} from "../hooks";
import styles from "./locationList.module.scss";

const cx = classnames.bind(styles);

interface ILocationProps {
  isSelected: (name: LOCATION_TYPE) => boolean;
  toggleLocation: () => void;
  currentLocation: LOCATION_TYPE | null;
  locationName: LOCATION_TYPE;
}

const Location = (
  {
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
      {LocationNameMap[locationName]}
    </li>
  )
};

interface ILocationListProps {
  isSelected: (name: LOCATION_TYPE) => boolean;
  toggleLocation: () => void;
  currentLocation: LOCATION_TYPE | null;
  handleSetCurrentLocation: (value: LOCATION_TYPE) => void;
}

const LocationList = (
  {
    isSelected,
    toggleLocation,
    currentLocation,
    handleSetCurrentLocation
  }: ILocationListProps) => {
  const locationListRef = useRef(null);

  useMouseOver({ref: locationListRef, handleSetCurrentLocation});

  const list = ALL_LOCATIONS.map(locationName =>
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