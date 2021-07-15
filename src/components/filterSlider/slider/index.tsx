import styles from './slider.module.scss';
import classnames from 'classnames/bind';
import {useStores} from "../../../util/storeProvider";
import {observer} from "mobx-react";

const cx = classnames.bind(styles);

interface List {
	scrollLeftOffset: number;
}

const List = observer((props: List) => {
	const {scrollLeftOffset} = props;
	const {filterSliderUIStore} = useStores();
	const {itemsEls, selectedFilterList, deleteFilter} = filterSliderUIStore;

	let filterList = [];
	selectedFilterList.forEach((filter) => {filterList.push(filter)});

	const list = filterList.map((filter, index) => {
		return (
			<li ref={(itemEl) => {
				itemsEls && itemEl && (itemsEls[index] = itemEl);
			}} 
			key={filter.type} 
			className={cx('item')}
			>
			<div>
				<span>{filter.text}</span>
				<a 
					className={cx('deleteBtn')}
					onClick={() => deleteFilter(filter)}
				>X</a>
			</div>
		</li>
		)
	})

	return (
		<ul 
			className={cx('list')} 
			style={{transform: `translate3d(${scrollLeftOffset}px, 0px, 0px)`}}
		>
			{list}
		</ul>
	)
});


const Slider = observer(() => {
	const {filterSliderUIStore} = useStores();
	const {
		itemsEls, 
		currentIndex, 
		setCurrentIndex, 
		scrollLeftOffset, 
		setScrollLeftOffset,
		marginRight
	} = filterSliderUIStore;

	const handlePrev = () => {
		if(currentIndex - 1 < 0) return;
		const itemEl = itemsEls[currentIndex - 1];
		if(!itemEl) return;
		if(currentIndex > 0) setCurrentIndex(currentIndex - 1);
		setScrollLeftOffset(scrollLeftOffset + (itemEl.offsetWidth + marginRight));
	};

	const handleNext = () => {
		if(currentIndex + 1 > itemsEls.length - 2) return;
		const itemEl = itemsEls[currentIndex];
		if(!itemEl) return;
		if(currentIndex < itemsEls.length - 1) setCurrentIndex(currentIndex + 1);
		setScrollLeftOffset(scrollLeftOffset - (itemEl.offsetWidth + marginRight));
	};

	return (
		<div className={cx('sliderWrap')}>
			<div className={cx('sliderContents')}>
				<div className={cx('slider')}>
					<List scrollLeftOffset={scrollLeftOffset}/>
				</div>
				{
					currentIndex > 0 &&
					<button
						type={'button'}
						className={cx('button', 'prev')}
						onClick={handlePrev}
					/>
				}
				
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
