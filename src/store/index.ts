import FilterSliderUIStore from "./filterSliderUIStore";
import ChartsUIStore from "./chartsUIStore";

export interface Stores {
	filterSliderUIStore: FilterSliderUIStore;
	chartsUIStore: ChartsUIStore;
}

export function getStores() {
	return {
		filterSliderUIStore: new FilterSliderUIStore(),
		chartsUIStore: new ChartsUIStore(),
	}

}
