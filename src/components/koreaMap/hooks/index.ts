import {RefObject, useEffect} from "react";
import { LOCATION_TYPE } from "@domain/location";

interface IUseMouseOverProps {
	ref: RefObject<HTMLDivElement | SVGElement>;
	handleSetCurrentLocation: (value: LOCATION_TYPE) => void;
}

export const useMouseOver = (
	{
		ref,
		handleSetCurrentLocation
	}: IUseMouseOverProps) => {

	useEffect(() => {
		if(!ref.current) return;

		const handleMouseover = (e: any) => {
			if (!e.target.dataset.location) return;
			handleSetCurrentLocation(e.target.dataset.location);
		};

		ref.current.addEventListener('mouseover', handleMouseover);

		return (() => {
			ref.current?.removeEventListener('mouseover', handleMouseover);
		})
	}, []);
};
