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

export type IAnimationDataStyles = Record<keyof CSSProperties | TranslateType, { topValue: number, bottomValue: number }>;

export interface IInitData {
  top: number;
  bottom: number;
  styles: Partial<IAnimationDataStyles>;
}

export interface IAnimationData {
  top: number;
  bottom: number;
  easing: EasingType;
  styles: Partial<IAnimationDataStyles>;
  enabled?: boolean;
}

export interface AddAnimationProps {
  ref: HTMLDivElement;
  initData: IInitData;
  animationData: IAnimationData[];
}

export interface ApplyStylesProps {
  ref: HTMLElement;
  styles: IAnimationDataStyles;
  rate?: number;
}
