import {observable} from "mobx";
import { Ifilter } from "src/pages/filterSlider";

export default class FilterSliderUIStore {
	private _marginRight = 12;
	@observable private _itemsEls: Array<HTMLElement> = [];
	@observable private _currentIndex: number = 0;
	@observable private _selectedFilterList: Array<Ifilter> = [];
	@observable private _scrollLeftOffset = 0;

	get marginRight(): number {
		return this._marginRight;
	}

	get itemsEls(): Array<HTMLElement> {
		return this._itemsEls;
	}

	setItemsEls = (value: Array<HTMLElement>) => {
		this._itemsEls = value;
	};

	get currentIndex(): number {
		return this._currentIndex;
	}

	setCurrentIndex = (value: number) => {
		this._currentIndex = value;
	};
	
	get selectedFilterList(): Array<Ifilter>{
		return this._selectedFilterList;
	}

	get scrollLeftOffset(): number {
		return this._scrollLeftOffset;
	}

	setScrollLeftOffset = (value: number) => {
		this._scrollLeftOffset = value;
	};

	existFilter = (filterType: Ifilter) => {
		let exist = false;
		this._selectedFilterList.forEach((filter) => {
			if(filter.type === filterType.type) {
				exist = true;
			}
		})
		return exist;
	}

	selectFilter = (filterType: Ifilter) => {
		this._selectedFilterList.push(filterType);
	}

	deleteFilter = (filterType: Ifilter) => {
		this._selectedFilterList.forEach((filter, index) => {
			if(filter.type === filterType.type) {
				if(this._currentIndex > index) {
					this.setScrollLeftOffset(this.scrollLeftOffset + this._itemsEls[index].offsetWidth + this._marginRight);
					this.setCurrentIndex(this.currentIndex - 1);
				}
				this._selectedFilterList.splice(index, 1);
				this._itemsEls.splice(index, 1);
			}
		})
	}

}
