import styles from './slider.module.scss';
import classnames from 'classnames/bind';
import {useEffect, useRef, useState} from "react";
import {useStores} from "../../../util/storeProvider";
import {observer} from "mobx-react";

const cx = classnames.bind(styles);

interface List {
	scrollLeftOffset: number;
}

const List = (props: List) => {
	const data = [];

	const {scrollLeftOffset} = props;
	const {filterSliderUIStore} = useStores();
	const {itemsEls} = filterSliderUIStore;

	const deleteItem = (index: number) => {
		data.splice(index, 1);
		console.log(data);
	}

	const list = data.map((item, index) => {
		return (
			<li ref={(itemEl) => {
					itemsEls && itemsEls.current && itemEl && (itemsEls.current[index] = itemEl);
				}} 
				key={index} 
				className={cx('item')}
			>
				<div>
					<span>{item}</span>
					<a 
						className={cx('deleteBtn')}
						onClick={() => deleteItem(index)}
					>X</a>
				</div>
			</li>
		)
	});

	return (
		<ul 
			className={cx('list')} 
			style={{transform: `translate3d(${scrollLeftOffset}px, 0px, 0px)`}}
		>
			{list}
		</ul>
	)
};


const Slider = observer(() => {
	const [scrollLeftOffset, setScrollLeftOffset] = useState<number>(0);
	const els = useRef<Array<HTMLElement>>(null);
	const {filterSliderUIStore} = useStores();
	const {itemsEls, currentIndex, setCurrentIndex} = filterSliderUIStore;
	const marginRight = 12;

	useEffect(() => {
		els.current = [];
		filterSliderUIStore.setItemsEls(els);
	}, [els]);

	const handleNext = () => {
		if(currentIndex + 1 > itemsEls.current.length - 4) return;
		const itemEl = itemsEls.current[currentIndex];
		if(currentIndex < itemsEls.current.length - 1) setCurrentIndex(currentIndex + 1);
		setScrollLeftOffset(scrollLeftOffset - (itemEl.offsetWidth + marginRight));
	};

	const handlePrev = () => {
		if(currentIndex - 1 < 0) return;
		const itemEl = itemsEls.current[currentIndex - 1];
		if(currentIndex > 0) setCurrentIndex(currentIndex - 1);
		setScrollLeftOffset(scrollLeftOffset + (itemEl.offsetWidth + marginRight));
	};

	return (
		<div className={cx('sliderWrap')}>
			<div className={cx('sliderContents')}>
				<div className={cx('slider')}>
					<List scrollLeftOffset={scrollLeftOffset}/>
				</div>
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
			</div>
		</div>
	)
});

export default Slider;
