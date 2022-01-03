import {CSSProperties} from "react";
import bezierEasing from "bezier-easing";

export const Easing = {
  liner: bezierEasing(0, 0, 0, 0),
  midSlow: bezierEasing(0, 0.7, 1, 0.3),
  ease: bezierEasing(0.25, 0.1, 0.25, 1.0),
  easeIn: bezierEasing(0.38, 0.01, 0.78, 0.13),
};

export type TranslateType = 'translateX' | 'translateY';
export type EasingType = 'liner' | 'midSlow' | 'ease' | 'easeIn';

export type IInitDataStyle = CSSProperties | Record<TranslateType, number>;
export type IAnimationDataStyles = Record<string, { topValue: number, bottomValue: number }>;

export interface IInitData {
  top: number;
  bottom: number;
  topStyle: IInitDataStyle;
  bottomStyle: IInitDataStyle;
}

export interface IAnimationData {
  top: number;
  bottom: number;
  easing: EasingType;
  styles: IAnimationDataStyles;
  enabled?: boolean;
}

export interface AddAnimationProps {
  ref: HTMLDivElement;
  initData: IInitData;
  animationData: IAnimationData[];
}

export interface ApplyStylesProps {
  isInit?: boolean;
  ref: HTMLElement;
  styles: IInitDataStyle | IAnimationDataStyles;
  rate?: number;
}
