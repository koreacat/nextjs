import {CSSProperties} from "react";
import bezierEasing, {EasingFunction} from "bezier-easing";

export const Easing: Record<string, EasingFunction> = {
  liner: bezierEasing(0, 0, 0, 0),
  midSlow: bezierEasing(0, 0.7, 1, 0.3),
  ease: bezierEasing(0.25, 0.1, 0.25, 1.0),
  easeIn: bezierEasing(0.38, 0.01, 0.78, 0.13),
};

export type TranslateType = 'translateX' | 'translateY';
export type EasingType = 'liner' | 'midSlow' | 'ease' | 'easeIn';
export type AnimationStyleValue = { topValue: number, bottomValue: number, unit?: string };
export type AnimationStyles = Record<keyof CSSProperties | TranslateType | string, AnimationStyleValue>;

export interface InitData {
  top: number;
  bottom: number;
  styles: Partial<AnimationStyles>;
}

export interface AnimationData {
  top: number;
  bottom: number;
  easing: EasingType;
  styles: Partial<AnimationStyles>;
}

export interface AddAnimationProps {
  ref: HTMLDivElement;
  initData: InitData;
  animationDataArr: AnimationData[];
}

export interface ApplyInitStyleProps {
  ref: HTMLElement;
  initData: any;
  currentPos: number;
}

export interface ApplyAnimationStylesProps {
  ref: HTMLElement;
  animationDataArr: AnimationData[];
  currentPos: number;
}

export interface ApplyAnimationStyleProps {
  ref: HTMLElement;
  styleName: string;
  styleValues: AnimationStyleValue | undefined;
  rate: number;
}


export interface ApplyStyleProps {
  ref: HTMLElement;
  styleName: string;
  value: number | string;
  unit?: string;
}
