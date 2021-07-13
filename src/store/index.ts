import SliderUIStore from "./sliderUIStore";

export interface Stores {
	sliderUIStore: SliderUIStore;
}

export function getStores() {
	return {
		sliderUIStore: new SliderUIStore()
	}

}
