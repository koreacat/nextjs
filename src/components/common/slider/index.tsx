import {ReactNode, useEffect, useRef} from 'react';
import styles from './slider.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface ISliderProps {
	disabled?: boolean;
	marks?: Record<number, ReactNode | string>;
	max: number;
	min: number;
	range?: boolean;
	tooltipVisible?: boolean;
	value: number;
	onAfterChange?: () => {};
	onChange?: (value) => void;
}

const Slider = (
	{
		disabled= false,
		marks,
		max,
		min,
		range,
		tooltipVisible,
		value,
		onChange
	}: ISliderProps) => {

	const railEl = useRef(null);
	const handleEl = useRef(null);

	const sliderValue = value <= min ? min : value >= max ? max : value;

	const handleRailOnMouseDown = (e) => {
		let newLeft = e.clientX - railEl.current.getBoundingClientRect().left;
		if (newLeft < 0) newLeft = 0;

		let rightEdge = railEl.current.offsetWidth;
		if (newLeft > rightEdge) newLeft = rightEdge;

		onChange(Math.round(newLeft / rightEdge * 100));
	};

	const handleOnChange = (e) => {
		onChange(e.target.value);
	};

	const handleOnMouseDown = (e) => {
		e.preventDefault();
		const shiftX = e.clientX - handleEl.current.getBoundingClientRect().left;

		const onMouseUp = () => {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		};

		const onMouseMove = (e) => {
			let newLeft = e.clientX - shiftX - railEl.current.getBoundingClientRect().left;
			if (newLeft < 0) newLeft = 0;

			let rightEdge = railEl.current.offsetWidth;
			if (newLeft > rightEdge) newLeft = rightEdge;

			handleEl.current.style.left = newLeft + 'px';
			onChange(Math.round(newLeft / rightEdge * 100));
		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	return (
		<div className={cx('slider')}>
			<div ref={railEl} className={cx('rail')} onMouseDown={e => handleRailOnMouseDown(e)}/>
			<div className={cx('track')} style={{width: `${sliderValue}%`}} onMouseDown={e => handleRailOnMouseDown(e)}/>
			<div
				ref={handleEl}
				className={cx('handle')}
				role='slider'
				data-valuemin='0'
				data-valuemax='100'
				data-valuenow='74'
				aria-disabled='false'
				style={{left: `${sliderValue}%`}}
				onMouseDown={e => handleOnMouseDown(e)}
				onDragStart={() => {return false}}
			/>

			<div className={cx('step')}/>
			<div className={cx('mark')}/>

			<input type='number' className={cx('input')} onChange={e => handleOnChange(e)} value={sliderValue}/>
		</div>
	)
};

export default Slider;
