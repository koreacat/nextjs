import React from "react";
import classNames from "classnames/bind";
import styles from "./raderChart.module.scss";

const cx = classNames.bind(styles);
const { cos, sin, PI } = Math;

const CENTER = 292 / 2;

const scores = [
	{ type: 'a', score: 10, high: true },
	{ type: 'b', score: 30, high: false },
	{ type: 'c', score: 40, high: false },
	{ type: 'd', score: 60, high: false },
	{ type: 'e', score: 70, high: false },
	{ type: 'f', score: 90, high: false },
];

const Grid = () => {
	return (
		<g className={cx('grid')}>
			{scores.map((v, i, arr) =>
				<line className={cx("line")} transform={`rotate(${360 * i / arr.length})`}
					key={v.type} x1={'50%'} y1={'50%'} x2={'50%'} y2={CENTER - 100} />)}
			{Array(5).fill(0).map((v, i) =>
				<circle className={cx("circle")} key={i} cx={'50%'} cy={'50%'} r={(i + 1) * 20} />)}
		</g>
	)
}



const Dots = () => {
	const dots = scores.map(({ high, type }, i, arr) => {
		return <circle key={type} className={cx('dot', high ? 'high' : null)} cx={'50%'} cy={CENTER - 112} r={4} transform={`rotate(${360 * i / arr.length})`} />
	})

	return (
		<>{dots}</>
	)
}

const Values = () => {
	const coords = scores.map(({ score }, i, arr) => {
		const deg = PI * 2 * i / arr.length;
		const valueTop = CENTER - cos(deg) * score;
		const valueLeft = CENTER + sin(deg) * score;
		return `${valueLeft},${valueTop}`
	}).reduce((acc, v) => {
		return `${acc} ${v}`;
	});

	return (
		<>
			<polygon className={cx('value')} points={coords} />
		</>
	)
}


const RaderChart = () => {
	return (
		<div className={cx('container')}>
			<div className={cx('radar')}>
				<svg>
					<Grid />
					<Dots />
					<Values />
				</svg>
			</div>
		</div>
	);
};

export default RaderChart;
