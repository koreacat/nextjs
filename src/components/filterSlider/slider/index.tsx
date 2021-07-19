import styles from './slider.module.scss';
import classnames from 'classnames/bind';
import {useStores} from "../../../util/storeProvider";
import {observer} from "mobx-react";

const cx = classnames.bind(styles);

interface List {
	scrollOffset: number;
}

const List = observer((props: List) => {
	const {scrollOffset} = props;
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
			style={{transform: `translate3d(${scrollOffset}px, 0px, 0px)`}}
		>
			{list}
		</ul>
	)
});

const Slider = observer(() => {
	const {filterSliderUIStore} = useStores();
	const {
		sliderContentsWidth,
		scrollOffset, 
		resetFilter,
		setScrollLeft,
		setScrollRight
	} = filterSliderUIStore;

	return (
		<div className={cx('sliderWrap')}>
			<div 
				className={cx('sliderContents')}
				style={{width: `${sliderContentsWidth}px`}}
			>
				<div className={cx('slider')}>
					<List scrollOffset={scrollOffset}/>
				</div>
				<button
					type={'button'}
					className={cx('button', 'prev')}
					onClick={setScrollLeft}
				/>
				<button
					type={'button'}
					className={cx('button', 'next')}
					onClick={setScrollRight}
				/>
			</div>
			<div className={cx('buttonWrap')}>
				<button 
					className={cx('reset')}
					onClick={resetFilter}
				>초기화</button>
			</div>
		</div>
	)
});

export default Slider;
