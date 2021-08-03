import {MutableRefObject, useEffect} from "react";
import throttle from "../throttle";

type ScrollDir = 'UP' | 'DOWN';
interface useScrollDirProps {
	el?: MutableRefObject<any>;
	onScrollUp?: () => void;
	scrollUpTop?: number;
	onScrollDown?: () => void;
	scrollDownTop?: number;
	wait?: number;
}

export function useScrollDir(props: useScrollDirProps) {
	let lastScrollTop = 0;
	const { el, onScrollUp, scrollUpTop, onScrollDown, scrollDownTop } = props;

	const scrollEvent = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollDir: ScrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
		const elTop = el?.current.getBoundingClientRect().top;
		const windHeight = window.innerHeight;
		// const absoluteTop = scrollTop + elTop;

		if (onScrollUp && scrollDir === 'UP') {
			if (scrollUpTop) elTop - windHeight <= windHeight * scrollUpTop && onScrollUp();
			else onScrollUp();
		}

		if (onScrollDown && scrollDir === 'DOWN') {
			if (scrollDownTop) elTop - windHeight > windHeight * scrollDownTop && onScrollDown();
			else onScrollDown();
		}

		lastScrollTop = (scrollTop <= 0 ? 0 : scrollTop);
	};

	const onScroll = throttle(scrollEvent, props.wait || 50);

	useEffect(() => {
		document.addEventListener('scroll', onScroll, false);

		return (() => {
			document.removeEventListener('scroll', onScroll);
		});
	}, [])
}
