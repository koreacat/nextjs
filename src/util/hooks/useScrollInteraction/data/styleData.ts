import { CSSProperties } from 'react';
import { EasingType } from './easing';

export type TranslateType = 'translateX' | 'translateY';
export type StylesType = Record<keyof CSSProperties | TranslateType | string, StyleValue>;
export type StyleValue = { topValue: number | string; bottomValue: number | string; unit?: string };
export type OnScrollStyles = ({ el, initStyleData, styleDataArr }: OnScrollStylesProps) => void;

export interface InitStyleData {
  baseLineEl?: HTMLElement | null;
  top: () => number;
  bottom?: () => number;
  styles: Partial<StylesType>;
  reverse?: boolean;
}

export interface ApplyInitStyleProps {
  el: HTMLElement;
  key: string;
  top: () => number;
  styles: Partial<StylesType>;
  baseLine: number;
  reverse?: boolean;
}

export interface StyleData {
  baseLineEl?: HTMLElement | null;
  top: () => number;
  bottom?: () => number;
  easing: EasingType;
  styles: Partial<StylesType>;
}

export interface ApplyStylesProps {
  el: HTMLElement;
  styleDataArr: StyleData[];
  currentPos: number;
}

export interface ApplyStyleProps {
  el: HTMLElement;
  styles: Partial<StylesType>;
  rate: number;
}

export interface SetStyleProps {
  el: HTMLElement;
  styleName: string | any; // CSSStyleDeclaration
  value: number | string;
  unit?: string;
}

export interface OnScrollStylesProps {
  el: HTMLElement | null;
  initStyleData: InitStyleData;
  styleDataArr: StyleData[];
}
