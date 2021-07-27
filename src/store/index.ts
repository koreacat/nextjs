import FilterSliderUIStore from "./filterSliderUIStore";
import ChartsUIStore from "./chartsUIStore";
import SliderTabUIStore from "./sliderTabUIStore";

export interface Stores {
	sliderTabUIStore: SliderTabUIStore;
	filterSliderUIStore: FilterSliderUIStore;
	chartsUIStore: ChartsUIStore;
}

export function getStores() {
	return {
		sliderTabUIStore: new SliderTabUIStore(),
		filterSliderUIStore: new FilterSliderUIStore(),
		chartsUIStore: new ChartsUIStore(),
	}

}
