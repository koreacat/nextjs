import styles from './slider.module.scss';
import classnames from 'classnames/bind';
import {useEffect, useRef} from "react";
import {useStores} from "../../util/storeProvider";
import {observer} from "mobx-react";

const cx = classnames.bind(styles);

const data = [
	'유연 근무를 시행하는',
	'사내식당을',
	'직급',
	'뛰어난 동료가 많은',
	'차별이 없는',
	'사회공동이익을 추구하는 추구하는 추구하는',
	'유연 근무를 시행하는',
	'사내식당을 운영하는',
	'직급이 없는',
	'뛰어난 동료가 많은',
	'차별이 없는',
	'사회공동이익을 추구하는',
	'유연 근무를 시행하는',
	'사내식당을 운영하는',
	'직급이 없는',
	'뛰어난 동료가 많은',
	'차별이 없는',
	'사회공동이익을 추구하는',
];

interface List {
	appMenu: any;
}

const List = (props: List) => {
	const {appMenu} = props;
	const {sliderUIStore} = useStores();
	const {itemsEls} = sliderUIStore;

	const scrollEvent = (e: any) => {
		let diff = e.deltaY;
		appMenu.current.scrollLeft += diff;
	};

	const list = data.map((item, index) => {
		return (
			<li ref={(itemEl) => {
				itemsEls && itemsEls.current && itemEl && (itemsEls.current[index] = itemEl);
			}} key={index} className={cx('item')}>
				<div>
					<span>{item}</span>
				</div>
			</li>
		)
	});

	return (
		<ul ref={appMenu} className={cx('slider')} onWheel={scrollEvent}>
			{list}
		</ul>
	)
};


const Slider = observer(() => {
	const appMenu = useRef<HTMLUListElement>(null);
	const els = useRef<Array<HTMLElement>>(null);
	const {sliderUIStore} = useStores();
	const {itemsEls, currentIndex, setCurrentIndex} = sliderUIStore;

	useEffect(() => {
		els.current = [];
		sliderUIStore.setItemsEls(els);
	}, [els]);

	const handleNext = () => {
		if(!appMenu.current) return;
		const itemEl = itemsEls.current[currentIndex];
		if(currentIndex < itemsEls.current.length - 1) setCurrentIndex(currentIndex + 1);
		appMenu.current.scrollLeft += itemEl.offsetWidth + 12;
	};

	const handlePrev = () => {
		if(!appMenu.current) return;
		const itemEl = itemsEls.current[currentIndex - 1];
		if(currentIndex > 0) setCurrentIndex(currentIndex - 1);
		appMenu.current.scrollLeft -= itemEl?.offsetWidth + 12;
	};

	return (
		<div className={cx('sliderWrap')}>
			<div className={cx('sliderContents')}>
				<button
					type={'button'}
					className={cx('button', 'prev')}
					onClick={handlePrev}
				/>
				<button
					type={'button'}
					className={cx('button', 'next')}
					onClick={handleNext}
				/>
				<List
					appMenu={appMenu}
				/>
			</div>
		</div>
	)
});

export default Slider;
