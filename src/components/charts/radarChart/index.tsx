import React from "react";
import classNames from "classnames/bind";
import styles from "./radarChart.module.scss";

const cx = classNames.bind(styles);

const {cos, sin, PI} = Math;
const CENTER = 292 / 2;

interface IRadarChartData {
  title: string;
  desc?: string;
  values: number[];
  emphasized?: boolean;
  onClick?: () => void;
}

const Grid = ({radarChartDataList}: { radarChartDataList: IRadarChartData[] }) => {

  const lines = radarChartDataList.map((v, index, arr) =>
    <line
      key={index}
      className={cx("line")}
      x1={'50%'} y1={'50%'} x2={'50%'} y2={CENTER - 100}
      transform={`rotate(${360 * index / arr.length})`}
    />
  );

  const circles = Array(5).fill(0).map((v, index) =>
    <circle
      key={index}
      className={cx("circle")}
      cx={'50%'} cy={'50%'} r={(index + 1) * 20}
    />
  );

  return (
    <g className={cx('gridWrap')}>
      {lines}
      {circles}
    </g>
  )
};

interface IDotesProps {
  radarChartDataList: IRadarChartData[];
}

const Dots = ({radarChartDataList}: IDotesProps) => {

  const dots = radarChartDataList.map(({emphasized}, index, arr) =>
    <circle
      key={index}
      className={cx('dot', {'em': emphasized})}
      cx={'50%'} cy={CENTER - 112} r={4}
      transform={`rotate(${360 * index / arr.length})`}
    />
  );

  return <>{dots}</>
};

interface IPolygonProps {
  radarChartDataList: IRadarChartData[];
  polygonColor?: THEME_TYPE; // 그래프 색상
  valueIndex: number;
}

const Polygon = (
  {
    radarChartDataList,
    polygonColor,
    valueIndex
  }: IPolygonProps) => {

  const coords = radarChartDataList.map(({values}, index, arr) => {
    const deg = PI * 2 * index / arr.length;
    let valueTop = CENTER - cos(deg) * values[valueIndex];
    let valueLeft = CENTER + sin(deg) * values[valueIndex];
    if (isNaN(valueTop)) valueTop = CENTER - cos(deg);
    if (isNaN(valueLeft)) valueLeft = CENTER + sin(deg);
    return `${valueLeft},${valueTop}`
  }).reduce((acc, cur) => {
    return `${acc} ${cur}`;
  });

  return (
    <polygon className={cx('polygon', polygonColor)} points={coords}/>
  )
};

interface ITextsProps {
  radarChartDataList: IRadarChartData[];
  selectable?: boolean;
}

const Texts = (
  {
    radarChartDataList,
    selectable
  }: ITextsProps) => {

  const texts = radarChartDataList.map(({title, desc, emphasized, onClick}, index, arr) => {
    const deg = PI * 2 * index / arr.length;
    const top = CENTER - cos(deg) * 133 - 7.5;
    const left = CENTER + sin(deg) * 140;

    const handleOnclick = () => {
      if (!selectable) return;
      onClick && onClick();
    };

    return (
      <div
        key={index}
        className={cx('textWrap', {'em': emphasized})}
        style={{left, top}}
        onClick={handleOnclick}>
        <div className={cx('contents')}>
          <em className={cx('title')}>{title}</em>
          <span className={cx('text')}>{desc}</span>
        </div>
      </div>
    )
  });

  return <>{texts}</>
};

type THEME_TYPE = 'EMPTY' | 'GREEN' | 'SKY';

interface IRadarChartProps {
  radarChartDataList: IRadarChartData[];
  color?: THEME_TYPE; // 강조된 점, 텍스트 색상
  polygonColors?: THEME_TYPE[]; // 그래프 색상
  selectable?: boolean;
  polygonCount?: number;
}

const RadarChart = (
  {
    radarChartDataList,
    color,
    polygonColors,
    polygonCount = 1,
    selectable = true
  }: IRadarChartProps) => {

  const polygons = new Array(polygonCount).fill(0).map((v, index) => {
    return (
      <Polygon
        key={index}
        radarChartDataList={radarChartDataList}
        polygonColor={polygonColors[index]}
        valueIndex={index}
      />
    )
  });

  return (
    <div className={cx('radarCharArea', color)}>
      <div className={cx('radarCharWrap')}>
        <svg className={cx('svgArea')}>
          <Grid radarChartDataList={radarChartDataList}/>
          <Dots radarChartDataList={radarChartDataList}/>
          {polygons}
        </svg>
        <div className={cx('textArea')}>
          <Texts
            radarChartDataList={radarChartDataList}
            selectable={selectable}
          />
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
