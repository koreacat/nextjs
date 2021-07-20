import styles from './slider.module.scss';
import classnames from 'classnames/bind';
import {useStores} from "../../../util/storeProvider";
import {observer} from "mobx-react";

const cx = classnames.bind(styles);

const List = observer(() => {
	const {filterSliderUIStore} = useStores();
	const {
		MARGIN_RIGHT, 
		itemsEls, 
		selectedFilterList, 
		deleteFilter,
		scrollOffset
	} = filterSliderUIStore;

	const list = selectedFilterList.map((filter, index) => {
		return (
			<li 
				key={filter.type} 
				ref={(itemEl) => {
					itemsEls && itemEl && (itemsEls[index] = itemEl);
				}} 
				className={cx('item')}
				style={{marginRight: `${MARGIN_RIGHT}px`}}
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
		SLIDER_CONTENTS_WIDTH,
		resetFilter,
		setScrollLeft,
		setScrollRight,
	} = filterSliderUIStore;

	return (
		<div className={cx('sliderWrap')}>
			<div 
				className={cx('sliderContents')}
				style={{width: `${SLIDER_CONTENTS_WIDTH}px`}}
			>
				<div className={cx('slider')}>
					<List/>
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
