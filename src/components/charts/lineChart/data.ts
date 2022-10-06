import {ReactElement} from "react";

export type LineChartType = 'black' | 'green' | 'blue';
export type ToolTipPositionType = 'top' | 'left';

export const EDGE_SPACE = 0.66;

export enum LineColors {
  black = '#44474B',
  green = '#52C564',
  blue = '#2B53AE',
}

export enum ShapeColors {
  black = '#CFD1D5',
  green = '#E0F9E4',
  blue = '#C3D1EF',
}

export interface ChartData {
  column: number;
  toolTip?: ReactElement;
  toolTipPosition?: ToolTipPositionType;
}