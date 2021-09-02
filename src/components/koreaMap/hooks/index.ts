import {useEffect} from "react";


interface IUseMouseHoverProps {
	ref;
	cx;
	setCurrentLocation;
}

export const useMouseHover = ({ref, cx, setCurrentLocation}: IUseMouseHoverProps) => {

	useEffect(() => {
		const mouseover = ref.current.addEventListener('mouseover', (e) => {
			if (!e.target.dataset.location) return;
			setCurrentLocation(e.target.dataset.location, () => e.target.classList.add(cx('hover')));
		});

		// const mouseout = ref.current.addEventListener('mouseout', (e) => {
		// 	if (!e.target.dataset.location) return;
		// 	setCurrentLocation('', () => e.target.classList.remove(cx('hover')));
		// });

		return (() => {
			ref.current.removeEventListener('mouseover', mouseover);
			// ref.current.removeEventListener('mouseout', mouseout);
		})
	}, []);
};
