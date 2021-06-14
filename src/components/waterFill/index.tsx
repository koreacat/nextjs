import {useEffect, useRef, useState} from 'react';
import styles from './waterFill.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export type CULTURE_TYPE =
	'POSITIVE' | //긍정문화
	'PERFORMANCE' | //성과문화
	'VALUE'; //가치문화

interface WaterIntervalProps {
	water: HTMLDivElement | null,
	waterCover: HTMLDivElement | null,
	count: number,
	setCount: (count: number) => void,
	average: number
}

interface WaterFillProps {
	title: string;
	average: number;
	type: CULTURE_TYPE | string;
}

const WaterFill = (props: WaterFillProps) => {
	const [count, setCount] = useState(0);
	const water = useRef<HTMLDivElement>(null);
	const waterCover = useRef<HTMLDivElement>(null);
	const {title, average, type} = props;
	let interval: NodeJS.Timeout | null = null;

	const waterInterval = (props: WaterIntervalProps) => {
		interval && clearInterval(interval);

		const {water, waterCover, count, setCount, average} = props;
		const isFill = average > count;
		let percent = count;
		let translateValue = average >= 100 ? 100 : average <= 0 ? 0 : average;
		const diff = Math.abs(count - translateValue);

		if (average === count || !waterCover || !water) return;

		waterCover.style.transform = 'translate(0, 8%)';
		water.style.transition = `all linear ${(diff * 60 / 1000) + 0.2}s`;
		water.style.transform = `translate(0, ${100 - translateValue}%)`;

		interval = setInterval(() => {
			setCount(isFill ? ++percent : --percent);
			if ((isFill ? (percent >= average) : (percent <= average)) || (percent >= 100) || (percent <= 0)) {
				waterCover.style.transform = 'translate(0, 0%)';
				interval && clearInterval(interval);
				interval = null;
			}
		}, 60);
	};

	useEffect(() => {
		waterInterval({
			water: water.current,
			waterCover: waterCover.current,
			count,
			setCount,
			average
		});
	}, [average, type]);

	return (
		<div className={cx('waterFill')}>
			<div className={cx('box', type)}>
				<div ref={water} className={cx('water')}>
					<svg viewBox='0 0 560 20' className={cx('wave', 'back')}>
						<Wave/>
					</svg>
					<svg viewBox='0 0 560 20' className={cx('wave', 'front')}>
						<Wave/>
					</svg>
					<div ref={waterCover} className={cx('wave', 'cover')} />
				</div>
				<div className={cx('waterText')}>
					<div className={cx('percentArea')}>
						<span className={cx('num')}>{count}</span>
						<span className={cx('per')}>%</span>
					</div>
					<span className={cx('title')}>{title}</span>
				</div>
			</div>
		</div>
	)
};

const Wave = () => {
	return (
		<>
			<path d='M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z'/>
			<path d='M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z'/>
			<path d='M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z'/>
			<path d='M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z'/>
		</>
	)
};

export default WaterFill;
