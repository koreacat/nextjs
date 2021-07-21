import FilterSliderUIStore from "./filterSliderUIStore";
import GraphsUIStore from "./graphsUIStore";

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
