import Header from "./Header";
import {useEffect, useState} from "react";
import classNames from 'classnames/bind';

export default function FixedHeader() {
	let lastScrollTop = 0;
	const [scrollUp, setScrollUp] = useState(true);

	const scrollEvent = function(e: Event) {
		e.preventDefault();
		const st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop){
			setScrollUp(true);
		} else {
			setScrollUp(false);
		}
		lastScrollTop = (st <= 0 ? 0 : st);
	};

	useEffect(() => {
		document.addEventListener('scroll', scrollEvent, false);
		return (() => {
			document.removeEventListener('scroll', scrollEvent);
		});
	}, []);

	return (
		<div className={classNames('fixedHeader', scrollUp && 'Up')}>
			<Header/>
		</div>
	)
}
