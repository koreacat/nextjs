import { action, observable } from "mobx";

export type LOCATION_TYPE =
	'서울특별시' | '경기도' | '인천광역시' | '부산광역시' |
	'대구광역시'| '광주광역시'| '대전광역시'| '울산광역시'|
	'세종특별자치시'| '강원도'| '충청남도'| '경상남도'|
	'경상북도'| '전라남도'| '전라북도'| '충청북도'|
	'제주특별자치도';

export default class KoreaMapUIStore {
	@observable private _selectedLocations = new Set<LOCATION_TYPE>();
	@observable private _currentLocation = null;
	@observable private _namePosition = { top: 0, left: 0 };

	get selectedLocations() {
		return this._selectedLocations;
	}

	get currentLocation() {
		return this._currentLocation;
	}

	get namePosition() {
		return this._namePosition;
	}

	setCurrentLocation = (value: string, callback?) => {
		this._currentLocation = value;
		this.setNamePosition(value);
		callback && callback();
	};

	setNamePosition = (value) => {
		if(!value) return;
		const target = document.querySelector(`path[data-location=${value}]`);
		const cr = target.getBoundingClientRect();
		const nameRef = document.getElementById('locationName');
		const nameWidth = nameRef.getBoundingClientRect().width;

		this._namePosition = {
			top: cr.y + cr.height / 2 - 40,
			left: cr.x + cr.width / 2 - nameWidth / 2
		};
	};

	isSelected = (name: LOCATION_TYPE) => {
		return this._selectedLocations.has(name);
	};

	@action
	toggleLocation = () => {
		this._selectedLocations.has(this._currentLocation)
			? this._selectedLocations.delete(this._currentLocation)
			: this._selectedLocations.add(this._currentLocation)
	}

}
