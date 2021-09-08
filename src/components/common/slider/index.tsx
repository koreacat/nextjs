import { ReactNode, useRef, useState } from 'react';
import styles from './slider.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface ISliderProps {
	disabled?: boolean;
	marks?: Record<number, ReactNode | string>;
	max: number;
	min: number;
	// range?: boolean; // TODO 핸들 2개로 범위 설정
	tooltipVisible?: boolean;
	value: number;
	step: number;
	onChange: (value) => void;
}

const Slider = (
	{
		disabled = false,
		marks,
		max,
		min,
		tooltipVisible = true,
		value,
		step,
		onChange
	}: ISliderProps) => {
	const sliderValue = value <= min ? min : value >= max ? max : value;
	const railEl = useRef(null);
	const handleEl = useRef(null);
	const [sliderPercent, setSliderPercent] = useState((sliderValue - min) / (max - min) * 100);
	const [isMouseDown, setIsMouseDown] = useState(false);
	let shiftHandleX = 0;

	const handleSlide = (left) => {
		if (left < 0) left = 0;

		const rightEdge = railEl.current.offsetWidth;
		if (left > rightEdge) left = rightEdge;

		const fixedNum = (step + '').split('.')[1]?.length || 0;

		const percent = left / rightEdge * 100;

		const decimalOffset = Math.pow(10, fixedNum);

		const stepRange = (max - min) / step;

		const offset = stepRange / decimalOffset / 100;

		const newValue = Number((percent * offset).toFixed(fixedNum));

		const newLeft = newValue / offset;

		const result = Number(((min + newValue * step * decimalOffset)).toFixed(fixedNum));

		if (result > max) return;
		onChange(result);
		setSliderPercent(newLeft);
	}

	const onMouseUp = () => {
		setIsMouseDown(false);
		document.removeEventListener('mouseup', onMouseUp);
		document.removeEventListener('mousemove', onMouseMove);
	};

	const onMouseMove = (e) => {
		let left = e.clientX - shiftHandleX - railEl.current.getBoundingClientRect().left;
		handleSlide(left);
	}

	const setNewPosition = (clientX) => {
		const shiftRailX = clientX - railEl.current.getBoundingClientRect().left;
		handleSlide(shiftRailX);
	}

	const setHandlePosition = (clientX) => {
		setTimeout(() => {shiftHandleX = clientX - handleEl.current.getBoundingClientRect().left}, 0);
	}

	const handleOnMouseDown = (e) => {
		if(disabled) return;
		e.preventDefault();
		setIsMouseDown(true);
		setNewPosition(e.clientX);
		setHandlePosition(e.clientX);
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	const mark = Object.keys(marks).map((key) => {
		const value = marks[key];
		const range = max - min;
		const newLeft = (Number(key) - min) / range * 100;

		return (
			<div key={key} className={cx('mark')} style={{left: `${newLeft}%`}}>
				{value}
			</div>
		)
	})

	return (
		<div
			className={cx('slider', {'disabled': disabled})}
			onMouseDown={e => handleOnMouseDown(e)}
		>
			<div className={cx('wrap')}>
				<div ref={railEl} className={cx('rail')}/>
				<div className={cx('track')} style={{ width: `${sliderPercent}%` }}/>
				<div
					ref={handleEl}
					className={cx('handle', {'active': isMouseDown})}
					role='slider'
					style={{ left: `${sliderPercent}%` }}
					onDragStart={() => { return false }}
				>
					{tooltipVisible && <div className={cx('tooltip', { 'hide': !isMouseDown })}>{value}</div>}
				</div>
				<div className={cx('markWrap')}>{mark}</div>
			</div>
			<input type='number' className={cx('input')} onChange={() => onChange(value)} value={value} />
		</div>
	)
};

export default Slider;
