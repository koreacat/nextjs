import {observable} from "mobx";
import {RefObject} from "react";

export default class FilterSliderUIStore {
	@observable private _itemsEls: RefObject<Array<HTMLElement>> | null = null;
	@observable private _currentIndex: number = 0;
	@observable private _selectedItemList: Array<any> = [];

	get itemsEls(): React.RefObject<Array<HTMLElement>> | null {
		return this._itemsEls;
	}

	setItemsEls = (value: React.RefObject<Array<HTMLElement>> | null) => {
		this._itemsEls = value;
	};

	get currentIndex(): number {
		return this._currentIndex;
	}

	setCurrentIndex = (value: number) => {
		this._currentIndex = value;
	};

}
