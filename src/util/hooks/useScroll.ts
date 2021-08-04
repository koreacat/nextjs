import {MutableRefObject, useEffect} from "react";
import throttle from "../throttle";

type ScrollDir = 'UP' | 'DOWN';
interface useScrollDirProps {
	el?: MutableRefObject<any>;
	onScrollUp?: () => void;
	scrollUpTop?: number;
	scrollUpTopStart?: number;
	scrollUpTopEnd?: number;
	onScrollDown?: () => void;
	scrollDownTop?: number;
	scrollDownTopSrtart?: number;
	scrollDownTopEnd?: number;
	wait?: number;
}

export function useScrollDir(props: useScrollDirProps) {
	let lastScrollTop = 0;
	const { el, onScrollUp, scrollUpTop, scrollUpTopStart, scrollUpTopEnd, onScrollDown, scrollDownTop ,scrollDownTopSrtart, scrollDownTopEnd} = props;

	const scrollEvent = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollDir: ScrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
		const elTop = el?.current?.getBoundingClientRect().top;
		const windHeight = window.innerHeight;
		const elPos = elTop - windHeight;
		// const absoluteTop = scrollTop + elTop;

		if (onScrollUp && scrollDir === 'UP') {
			if (scrollUpTopStart && scrollUpTopEnd) {
				if((windHeight * scrollUpTopEnd <= elPos) && (elPos <= windHeight * scrollUpTopStart)) {
					onScrollUp();
				}
			}
			else if (scrollUpTop) {
				if(elPos <= windHeight * scrollUpTop) {
					onScrollUp();
				}
			}
			else onScrollUp();
		}

		if (onScrollDown && scrollDir === 'DOWN') {
			if (scrollDownTopSrtart && scrollDownTopEnd) {
				if((windHeight * scrollDownTopEnd >= elPos) && (elPos >= windHeight * scrollDownTopSrtart)) {
					console.log('da');
					onScrollDown();
				}
			}
			else if (scrollDownTop) {
				if(elPos > windHeight * scrollDownTop) {
					console.log('ba');
					onScrollDown();
				}
			}
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
