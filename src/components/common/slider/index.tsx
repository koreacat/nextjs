import {ReactNode, useEffect, useRef, useState} from 'react';
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
	step?: number;
	onChange?: (value) => void;
}

const Slider = (
	{
		disabled = false,
		marks,
		max,
		min,
		range,
		tooltipVisible,
		value,
		step = 1,
		onChange
	}: ISliderProps) => {
	const fixedNum = (step+'').split('.')[1]?.length || 0;
	const sliderValue = value <= min ? min : value >= max ? max : value;

	const railEl = useRef(null);
	const handleEl = useRef(null);
	const [sliderPercent, setSliderPercent] = useState((sliderValue - min) / (max - min) * 100);

	// const handleRailOnMouseDown = (e) => {
	// 	let newLeft = e.clientX - railEl.current.getBoundingClientRect().left;
	// 	if (newLeft < 0) newLeft = 0;

	// 	let rightEdge = railEl.current.offsetWidth;
	// 	if (newLeft > rightEdge) newLeft = rightEdge;

	// 	onChange(Math.round(newLeft / rightEdge * 100));
	// };

	const handleOnMouseDown = (e) => {
		e.preventDefault();
		const shiftX = e.clientX - handleEl.current.getBoundingClientRect().left;

		const onMouseUp = () => {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		};

		const onMouseMove = (e) => {
			let left = e.clientX - shiftX - railEl.current.getBoundingClientRect().left;
			if (left < 0) left = 0;

			const rightEdge = railEl.current.offsetWidth;
			if (left > rightEdge) left = rightEdge;

			const percent = left / rightEdge * 100;

			if (step < 1) {
				//TODO 소수점 처리
				const range = (max - min) / step;

				const offset = range / 100 * step;
	
				const value = Number((percent * offset).toFixed(fixedNum));
				
				const newLeft = value / offset;
	
				const result = Number(((min + value)).toFixed(fixedNum));

				console.log(value, newLeft, result);
	
				if(result > max) return;
				onChange(result);
				setSliderPercent(newLeft);

			} else {
				const range = (max - min) / step;

				const offset = range / 100;
	
				const value = Number((percent * offset).toFixed(fixedNum));
	
				const newLeft = value / offset;
	
				const result = Number((min + value * step).toFixed(fixedNum));
	
				if(result > max) return;
				onChange(result);
				setSliderPercent(newLeft);
			};
		}


		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	return (
		<div className={cx('slider')}>
			<div ref={railEl} className={cx('rail')}/>
			<div className={cx('track')} style={{width: `${sliderPercent}%`}}/>
			<div
				ref={handleEl}
				className={cx('handle')}
				role='slider'
				data-valuemin='0'
				data-valuemax='100'
				data-valuenow='74'
				aria-disabled='false'
				style={{left: `${sliderPercent}%`}}
				onMouseDown={e => handleOnMouseDown(e)}
				onDragStart={() => {return false}}
			/>

			<div className={cx('step')}/>
			<div className={cx('mark')}/>

			<input type='number' className={cx('input')} onChange={e => onChange(e.target.value)} value={sliderValue}/>
		</div>
	)
};

export default Slider;
