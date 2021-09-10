import React, {ReactNode, useRef, useState} from 'react';
import styles from './slider.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface IMarkProps {
	max: number;
	min: number;
	marks?: Record<number, ReactNode | string>;
}

const Mark = ({max, min, marks}: IMarkProps) => {
	if (!marks) return null;

	const mark = Object.entries(marks).map(([key, value], index) => {
		const range = max - min;
		const left = (Number(key) - min) / range * 100;

		return (
			<div key={key} className={cx('mark')} style={{left: `${left}%`}}>
				{value}
			</div>
		)
	});

	return <>{mark}</>
};

interface ISliderProps {
	disabled?: boolean;
	marks?: Record<number, ReactNode | string>;
	max: number;
	min: number;
	tooltipVisible?: boolean;
	value: number;
	step: number;
	onChange: (value: number) => void;
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

	const sliderValue = (value: number) => {
		if(value <= min) {
			return min;
		} else if(value >= max) {
			return max;
		} else {
			return value;
		}
	};

	const railEl = useRef<HTMLDivElement>(null);
	const handleEl = useRef<HTMLDivElement>(null);
	const [sliderPercent, setSliderPercent] = useState((sliderValue(value) - min) / (max - min) * 100);
	const [isMouseDown, setIsMouseDown] = useState(false);
	const [shiftHandleX, setShiftHandleX] = useState(0); // 클릭시 마우스 위치와 핸들의 위치 차이

	const handleSlide = (left: number) => {
		if (!railEl.current) return;
		if (left < 0) left = 0;

		const rightEdge = railEl.current.offsetWidth;
		if (left > rightEdge) left = rightEdge;

		//소수점 자리수
		const fixedNum = (step + '').split('.')[1]?.length || 0;

		//현재 슬라이더 퍼센트
		const percent = left / rightEdge * 100;

		//소수점 step 처리를 위한 보정값
		const decimalOffset = Math.pow(10, fixedNum);

		//한 스텝당 이동하는 슬라이더의 퍼센트
		const stepRange = (max - min) / step;

		//퍼센트에서 relativeValue 구하기 위한 보정값
		const offset = stepRange / decimalOffset / 100;

		//퍼센트에서 환산된 상대적 위치값
		const relativeValue = Number((percent * offset).toFixed(fixedNum));

		//마우스 위치에 따라 계산된 슬라이더 위치
		const nextLeft = relativeValue / offset;

		//실제 value 값
		const newResult = Number(((min + relativeValue * step * decimalOffset)).toFixed(fixedNum));

		if (newResult > max) return;
		onChange(newResult);
		setSliderPercent(nextLeft);
	};

	const onMouseUp = () => {
		setIsMouseDown(false);
		document.removeEventListener('mouseup', onMouseUp);
		document.removeEventListener('mousemove', onMouseMove);
	};

	const onMouseMove = (e: MouseEvent) => {
		if (!railEl.current) return;
		let left = e.clientX - shiftHandleX - railEl.current.getBoundingClientRect().left;
		handleSlide(left);
	};

	// 클릭 했을 때 핸들의 처음 위치를 정해주는 함수
	const setNewPosition = async (clientX: number) => {
		if (!railEl.current) return;
		const shiftRailX = clientX - railEl.current.getBoundingClientRect().left;
		await handleSlide(shiftRailX);

		// 클릭 했을 때 클라이언트의 클릭 위치에 대한 핸들의 상대적 위치가 정해짐
		// 핸들의 상대적 위치는 핸들이 옮겨지고 결정되어야함
		if (!handleEl.current) return;
		setShiftHandleX(clientX - handleEl.current.getBoundingClientRect().left);
	};

	const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (disabled) return;
		e.preventDefault();
		setIsMouseDown(true);
		setNewPosition(e.clientX);
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	return (
		<div
			className={cx('slider', {'disabled': disabled})}
			onMouseDown={e => handleOnMouseDown(e)}
		>
			<div className={cx('wrap')}>
				<div ref={railEl} className={cx('rail')}/>
				<div className={cx('track')} style={{width: `${sliderPercent}%`}}/>
				<div
					ref={handleEl}
					className={cx('handle', {'active': isMouseDown})}
					role='slider'
					style={{left: `${sliderPercent}%`}}
				>
					{tooltipVisible && <div className={cx('tooltip', {'hide': !isMouseDown})}>{value}</div>}
				</div>
				<div className={cx('markWrap')}>
					<Mark
						min={min}
						max={max}
						marks={marks}
					/>
				</div>
			</div>
		</div>
	)
};

export default Slider;
