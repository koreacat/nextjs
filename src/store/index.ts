import FilterSliderUIStore from "./FilterSliderUIStore";
import GraphsUIStore from "./GraphsUIStore";

export interface Stores {
	filterSliderUIStore: FilterSliderUIStore;
	graphsUIStore: GraphsUIStore;
}

export function getStores() {
	return {
		filterSliderUIStore: new FilterSliderUIStore(),
		graphsUIStore: new GraphsUIStore(),
	}

}
