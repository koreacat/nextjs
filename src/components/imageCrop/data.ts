export const ORIGIN_POINT = Object.freeze({ x: 0, y: 0 });
export const ORIGIN_SIZE = Object.freeze({ w: 0, h: 0 });

enum DIR {
  e = 'e',
  w = 'w',
  s = 's',
  n = 'n',
  se = 'se',
  sw = 'sw',
  ne = 'ne',
  nw = 'nw',
}

export const LINE_DIR = ['e', 'w', 's', 'n'];
export const POINT_DIR = [...Object.keys(DIR)];

export interface Size {
  w: number;
  h: number;
}

export interface Point {
  x: number;
  y: number;
}

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}
