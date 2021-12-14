import {observable} from "mobx";

export default class SliderTabUIStore {
  private _MARGIN_LEFT = 32;
  private _SLIDER_CONTENTS_WIDTH = 552;
  @observable private _scrollOffset = 0;
  @observable private _currentItemIndex = 0;
  @observable private _itemsEls: Array<HTMLElement> = [];

  get MARGIN_LEFT(): number {
    return this._MARGIN_LEFT;
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
    if (value < 0 || value >= this._itemsEls.length) return;
    this._currentItemIndex = value;

    let listWidth = 0;
    let listLeftWidth = 0;
    let listRightWidth = 0;

    this._itemsEls.forEach((item, index) => {
      listWidth += item.offsetWidth + this._MARGIN_LEFT;
      if (index < this._currentItemIndex) {
        listLeftWidth += item.offsetWidth + this._MARGIN_LEFT;
      } else if (index >= this._currentItemIndex) {
        listRightWidth += item.offsetWidth + this._MARGIN_LEFT;
      }
    });

    if (listRightWidth > this._SLIDER_CONTENTS_WIDTH) {
      this.setScrollOffset(-listLeftWidth);
    } else {
      this._scrollOffset = -(listWidth - this._SLIDER_CONTENTS_WIDTH - this._MARGIN_LEFT);
    }
  };

  get scrollOffset(): number {
    return this._scrollOffset;
  }

  setScrollOffset = (value: number) => {
    this._scrollOffset = value;
  };

}
