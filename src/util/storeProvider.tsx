import React from "react";
import {Stores} from "../store";

const StoreContext = React.createContext(null);

export const StoreProvider: React.FC<{value: any}> = function (props) {
	return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useStores() {
	return React.useContext(StoreContext) as unknown as Stores;
}
