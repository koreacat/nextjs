import FilterSliderUIStore from "./filterSliderUIStore";
import ChartsUIStore from "./chartsUIStore";
import SliderTabUIStore from "./sliderTabUIStore";
import KoreaMapUIStore from "./koreaMapUIStore";

export interface Stores {
	sliderTabUIStore: SliderTabUIStore;
	filterSliderUIStore: FilterSliderUIStore;
	chartsUIStore: ChartsUIStore;
	koreaMapUIStore: KoreaMapUIStore;
}

export function getStores() {
	return {
		sliderTabUIStore: new SliderTabUIStore(),
		filterSliderUIStore: new FilterSliderUIStore(),
		chartsUIStore: new ChartsUIStore(),
		koreaMapUIStore: new KoreaMapUIStore(),
	}

}
