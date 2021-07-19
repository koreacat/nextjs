import {observable} from "mobx";
import { Ifilter } from "src/pages/filterSlider";

export default class FilterSliderUIStore {
	private _marginRight = 12;
	private _sliderContentsWidth = 800;
	@observable private _itemsEls: Array<HTMLElement> = [];
	@observable private _currentIndex: number = 0;
	@observable private _selectedFilterList: Array<Ifilter> = [];
	@observable private _scrollOffset = 0;

	get marginRight(): number {
		return this._marginRight;
	}

	get sliderContentsWidth(): number {
		return this._sliderContentsWidth;
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

	get scrollOffset(): number {
		return this._scrollOffset;
	}

	setScrollOffset = (value: number) => {
		this._scrollOffset = value;
	};

	getSelectedFilterListWidth = () => {
		let sum = 0;
		this._itemsEls.forEach((item) => {
			sum += item.offsetWidth + this._marginRight;
		})
		return sum;
	};

	//슬라이더 한칸 왼쪽으로 밀기
	setScrollLeft = () => {
		let sum = 0;
		this._itemsEls.forEach((item, index) => {
			if(index > this._currentIndex - 2) return;
			sum += item.offsetWidth + this._marginRight;
		})

		if(sum > this._sliderContentsWidth) {
			if(this._currentIndex - 1 < 0) return;
			const itemEl = this._itemsEls[this._currentIndex - 1];
			if(!itemEl) return;
			if(this._currentIndex > 0) this.setCurrentIndex(this._currentIndex - 1);
			this.setScrollOffset(-(sum - this.sliderContentsWidth - this._marginRight));
		} else {
			this.setScrollOffset(0);
		}
	}

	//슬라이더 한칸 오른쪽으로 밀기
	setScrollRight = () => {
		let sum = 0;
		this._itemsEls.forEach((item, index) => {
			if(index > this._currentIndex) return;
			sum += item.offsetWidth + this._marginRight;
		})
	
		if(this._currentIndex > this._itemsEls.length - 1) return;
		const itemEl = this._itemsEls[this._currentIndex];
		if(!itemEl) return;
		if(this._currentIndex < this._itemsEls.length) this.setCurrentIndex(this._currentIndex + 1);
		this.setScrollOffset(-(sum - this._sliderContentsWidth - this._marginRight));
	}

	//슬라이더 왼쪽 끝에 맞추기
	setScrollLeftEdge = () => {
		this.setCurrentIndex(0);
		this.setScrollOffset(0);
	}

	//슬라이더 오른쪽 끝에 맞추기
	setScrollRightEdge = () => {
		this.setCurrentIndex(this._selectedFilterList.length);
		this.setScrollOffset(-(this.getSelectedFilterListWidth() - this.sliderContentsWidth - this._marginRight));
	}

	resetFilter = () => {
		this._selectedFilterList = [];
		this._itemsEls = [];
		this.setCurrentIndex(0);
		this.setScrollOffset(0);
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
		this.setCurrentIndex(this._currentIndex + 1);
		setTimeout(() => {
			if(this.getSelectedFilterListWidth() > this._sliderContentsWidth) this.setScrollRightEdge();
		}, 0)
		
	}

	deleteFilter = (filterType: Ifilter) => {
		this._selectedFilterList.forEach((filter, index) => {
			if(filter.type === filterType.type) {
				this._selectedFilterList.splice(index, 1);
				this._itemsEls.splice(index, 1);
				this.setCurrentIndex(this._currentIndex - 1);
				setTimeout(() => {
					if(this.getSelectedFilterListWidth() > this._sliderContentsWidth) this.setScrollRightEdge();
					else this.setScrollLeftEdge();
				}, 0)
			}
		})
	}
}
