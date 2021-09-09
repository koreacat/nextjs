import {useEffect} from "react";

interface IUseMouseOverProps {
	ref;
	handleSetCurrentLocation;
}

export const useMouseOver = (
	{
		ref,
		handleSetCurrentLocation
	}: IUseMouseOverProps) => {

	useEffect(() => {
		const mouseover = ref.current.addEventListener('mouseover', (e) => {
			if (!e.target.dataset.location) return;
			handleSetCurrentLocation(e.target.dataset.location);
		});

		return (() => {
			ref.current?.removeEventListener('mouseover', mouseover);
		})
	}, []);
};
