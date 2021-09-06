import {useEffect} from "react";

interface IUseMouseOverProps {
	ref;
	setCurrentLocation;
}

export const useMouseOver = ({ref, setCurrentLocation}: IUseMouseOverProps) => {

	useEffect(() => {
		const mouseover = ref.current.addEventListener('mouseover', (e) => {
			if (!e.target.dataset.location) return;
			setCurrentLocation(e.target.dataset.location);
		});

		return (() => {
			ref.current?.removeEventListener('mouseover', mouseover);
		})
	}, []);
};
