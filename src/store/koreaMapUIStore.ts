import { action, observable } from "mobx";

export const LOCATION_DATA = [
    '서울특별시', '경기도', '인천광역시', '부산광역시', 
    '대구광역시', '광주광역시', '대전광역시', '울산광역시', 
    '세종특별자치시', '강원도', '충청남도', '경상남도', 
    '경상북도', '전라남도', '전라북도', '충청북도',
    '제주특별자치도'
];

export default class KoreaMapUIStore {
    @observable private _selectedLocations = new Set<string>();

    get selectedLocations () {
        return this._selectedLocations;
    }

    isSelected = (name: string) => {
        return this._selectedLocations.has(name);
    }

    @action
    toggleLocation = (name: string) => {
        console.log(name, this._selectedLocations);
        this._selectedLocations.has(name) 
        ? this._selectedLocations.delete(name) 
        : this._selectedLocations.add(name)
    }

}