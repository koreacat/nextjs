import { ReactElement } from 'react';

export type LineChartColorsType = 'black' | 'green' | 'blue';
export type LineChartSizeType = 'small' | 'large';

export const EDGE_SPACE = {
  small: 1.2,
  large: 0.66,
};

export const LineColors = {
  black: {
    small: '#9FA4AB',
    large: '#44474B',
  },
  green: {
    small: '#92E6A3',
    large: '#52C564',
  },
  blue: {
    small: '#8BA3DF',
    large: '#2B53AE',
  },
};

export const ShapeColors = {
  black: '#CFD1D5',
  green: '#E0F9E4',
  blue: '#C3D1EF',
};

export interface ChartData {
  column: number;
  toolTip?: ReactElement;
}
