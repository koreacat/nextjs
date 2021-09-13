import React from "react";
import classNames from "classnames/bind";
import styles from "./radarChart.module.scss";

const cx = classNames.bind(styles);

const { cos, sin, PI } = Math;
const CENTER = 292 / 2;

interface IRadarChartData {
	title: string;
	desc?: string;
	value: number;
	emphasized?: boolean;
}

const Grid = (
	{
		radarChartDataList
	}: { radarChartDataList: IRadarChartData[] }) => {

	const lines = radarChartDataList.map((chartData, index, arr) =>
		<line
			key={index}
			className={cx("line")}
			x1={'50%'} y1={'50%'} x2={'50%'} y2={CENTER - 100}
			transform={`rotate(${360 * index / arr.length})`}
		/>
	)

	const circles = Array(5).fill(0).map((v, index) =>
		<circle
			key={index}
			className={cx("circle")}
			cx={'50%'} cy={'50%'} r={(index + 1) * 20}
		/>
	)

	return (
		<g className={cx('gridWrap')}>
			{lines}
			{circles}
		</g>
	)
}


const Dots = (
	{
		radarChartDataList
	}: { radarChartDataList: IRadarChartData[] }) => {

	const dots = radarChartDataList.map(({ emphasized }, index, arr) =>
		<circle
			key={index}
			className={cx('dot', { 'em': emphasized })}
			cx={'50%'} cy={CENTER - 112} r={4}
			transform={`rotate(${360 * index / arr.length})`}
		/>
	)

	return <>{dots}</>
}

const Polygon = (
	{
		radarChartDataList
	}: { radarChartDataList: IRadarChartData[] }) => {

	const coords = radarChartDataList.map(({ value }, index, arr) => {
		const deg = PI * 2 * index / arr.length;
		const valueTop = CENTER - cos(deg) * value;
		const valueLeft = CENTER + sin(deg) * value;
		return `${valueLeft},${valueTop}`
	}).reduce((acc, cur) => {
		return `${acc} ${cur}`;
	});

	return <polygon className={cx('polygon')} points={coords} />
}

const Texts = (
	{
		radarChartDataList
	}: { radarChartDataList: IRadarChartData[] }) => {

	const texts = radarChartDataList.map(({ title, desc, emphasized }, index, arr) => {
		const deg = PI * 2 * index / arr.length;
		const top = CENTER - cos(deg) * 133 - 7.5;
		const left = CENTER + sin(deg) * 140;

		return (
			<div
				key={index}
				className={cx('textWrap', { 'em': emphasized })}
				style={{ left, top }}>
				<div className={cx('contents')}>
					<em className={cx('title')}>{title}</em>
					<span className={cx('text')}>{desc}</span>
				</div>
			</div>
		)
	});

	return <>{texts}</>
}

interface IRadarChartProps {
	radarChartDataList: IRadarChartData[];
}

const RadarChart = (
	{
		radarChartDataList
	}: IRadarChartProps) => {

	return (
		<div className={cx('radarCharArea')}>
			<div className={cx('radarCharWrap')}>
				<svg className={cx('svgArea')}>
					<Grid radarChartDataList={radarChartDataList} />
					<Dots radarChartDataList={radarChartDataList} />
					<Polygon radarChartDataList={radarChartDataList} />
				</svg>
				<div className={cx('textArea')}>
					<Texts radarChartDataList={radarChartDataList} />
				</div>
			</div>
		</div>
	);
};

export default RadarChart;
