import {observable} from "mobx";
import { Ifilter } from "src/pages/filterSlider";

export default class FilterSliderUIStore {
	private _MARGIN_RIGHT = 12;
	private _SLIDER_CONTENTS_WIDTH = 800;
	@observable private _scrollOffset = 0;
	@observable private _currentItemIndex = 0;
	@observable private _itemsEls: Array<HTMLElement> = [];
	@observable private _selectedFilterList: Array<Ifilter> = [];

	get MARGIN_RIGHT(): number {
		return this._MARGIN_RIGHT;
	}

	get SLIDER_CONTENTS_WIDTH(): number {
		return this._SLIDER_CONTENTS_WIDTH;
	}

	get itemsEls(): Array<HTMLElement> {
		return this._itemsEls;
	}

	setItemsEls = (value: Array<HTMLElement>) => {
		this._itemsEls = value;
	};

	get currentItemIndex(): number {
		return this._currentItemIndex;
	}

	setCurrentItemIndex = (value: number) => {
		this._currentItemIndex = value;
	};
	
	get selectedFilterList(): Array<Ifilter>{
		return this._selectedFilterList;
	}

	get scrollOffset(): number {
		return this._scrollOffset;
	}

	setScrollOffset = (value: number) => {
		this._scrollOffset = value;
	};

	getSelectedFilterListWidth = (length: number) => {
		let listWidth = 0;
		this._itemsEls.forEach((item, index) => {
			if(index > length) return;
			listWidth += item.offsetWidth + this._MARGIN_RIGHT;
		})
		return listWidth;
	};

	//슬라이더 한칸 왼쪽으로 밀기
	setScrollLeft = () => {
		let listWidth = this.getSelectedFilterListWidth(this._currentItemIndex - 2);

		if(listWidth > this._SLIDER_CONTENTS_WIDTH) {
			if(this._currentItemIndex - 1 < 0) return;
			const itemEl = this._itemsEls[this._currentItemIndex - 1];
			if(!itemEl) return;
			if(this._currentItemIndex > 0) this.setCurrentItemIndex(this._currentItemIndex - 1);
			this.setScrollOffset(-(listWidth - this._SLIDER_CONTENTS_WIDTH - this._MARGIN_RIGHT));
		} else {
			this.setScrollOffset(0);
		}
	}

	//슬라이더 한칸 오른쪽으로 밀기
	setScrollRight = () => {
		let listWidth = this.getSelectedFilterListWidth(this._currentItemIndex);
	
		if(this._currentItemIndex > this._itemsEls.length - 1) return;
		const itemEl = this._itemsEls[this._currentItemIndex];
		if(!itemEl) return;
		if(this._currentItemIndex < this._itemsEls.length) this.setCurrentItemIndex(this._currentItemIndex + 1);
		this.setScrollOffset(-(listWidth - this._SLIDER_CONTENTS_WIDTH - this._MARGIN_RIGHT));
	}

	//슬라이더 왼쪽 끝에 맞추기
	setScrollLeftEdge = () => {
		this.setCurrentItemIndex(0);
		this.setScrollOffset(0);
	}

	//슬라이더 오른쪽 끝에 맞추기
	setScrollRightEdge = () => {
		this.setCurrentItemIndex(this._selectedFilterList.length);
		this.setScrollOffset(-(this.getSelectedFilterListWidth(this._itemsEls.length) - this._SLIDER_CONTENTS_WIDTH - this._MARGIN_RIGHT));
	}

	resetFilter = () => {
		this._selectedFilterList = [];
		this._itemsEls = [];
		this.setCurrentItemIndex(0);
		this.setScrollOffset(0);
	};

	existFilter = (filterType: Ifilter) => {
		let exist = false;
		this._selectedFilterList.forEach((filter) => {
			if(filter.type === filterType.type) exist = true;
		})
		return exist;
	}

	selectFilter = (filterType: Ifilter) => {
		this._selectedFilterList.push(filterType);
		this.setCurrentItemIndex(this._currentItemIndex + 1);

		setTimeout(() => {
			if(this.getSelectedFilterListWidth(this._itemsEls.length) > this._SLIDER_CONTENTS_WIDTH) this.setScrollRightEdge();
		}, 0)
	}

	deleteFilter = (filterType: Ifilter) => {
		this._selectedFilterList.forEach((filter, index) => {
			if(filter.type === filterType.type) {
				this._selectedFilterList.splice(index, 1);
				this._itemsEls.splice(index, 1);
				this.setCurrentItemIndex(this._currentItemIndex - 1);

				setTimeout(() => {
					if(this.getSelectedFilterListWidth(this._itemsEls.length) > this._SLIDER_CONTENTS_WIDTH) this.setScrollRightEdge();
					else this.setScrollLeftEdge();
				}, 0)
				return;
			}
		})
	}
}
