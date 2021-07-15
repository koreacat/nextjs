import FilterSliderUIStore from "./FilterSliderUIStore";

export interface Stores {
	filterSliderUIStore: FilterSliderUIStore;
}

export function getStores() {
	return {
		filterSliderUIStore: new FilterSliderUIStore()
	}

}
