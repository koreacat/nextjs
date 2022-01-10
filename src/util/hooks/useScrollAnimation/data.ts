import { CSSProperties } from 'react';
import bezierEasing, { EasingFunction } from 'bezier-easing';

export const Easing: Record<string, EasingFunction> = {
  liner: bezierEasing(0, 0, 0, 0),
  midSlow: bezierEasing(0, 0.7, 1, 0.3),
  ease: bezierEasing(0.25, 0.1, 0.25, 1.0),
  easeIn: bezierEasing(0.38, 0.01, 0.78, 0.13),
};

export type TranslateType = 'translateX' | 'translateY';
export type EasingType = 'liner' | 'midSlow' | 'ease' | 'easeIn';
export type AnimationStyleValue = { topValue: number | string; bottomValue: number | string; unit?: string };
export type AnimationStyles = Record<keyof CSSProperties | TranslateType | string, AnimationStyleValue>;
export type AddAnimation = ({ ref, initData, animationDataArr }: AddAnimationProps) => void;
export type AddClass = ({ ref, classData }: AddClassProps) => void;

export interface InitData {
  baseLineRef?: HTMLElement | null;
  top: number;
  bottom: number;
  styles: Partial<AnimationStyles>;
}

export interface AnimationData {
  baseLineRef?: HTMLElement | null;
  top: number;
  bottom: number;
  easing: EasingType;
  styles: Partial<AnimationStyles>;
}

export interface ClassData {
  baseLineRef?: HTMLElement | null;
  top: number;
  bottom: number;
  className: string;
}

export interface AddAnimationProps {
  ref: HTMLElement;
  initData: InitData;
  animationDataArr: AnimationData[];
}

export interface AddClassProps {
  ref: HTMLElement;
  classData: ClassData;
}

export interface ApplyInitStyleProps {
  ref: HTMLElement;
  top: number;
  styles: Partial<AnimationStyles>;
  baseLine: number;
}

export interface ApplyAnimationStylesProps {
  ref: HTMLElement;
  animationDataArr: AnimationData[];
  currentPos: number;
}

export interface ApplyAnimationStyleProps {
  ref: HTMLElement;
  styles: Partial<AnimationStyles>;
  rate: number;
}

export interface ApplyStyleProps {
  ref: HTMLElement;
  styleName: string | any; // CSSStyleDeclaration
  value: number | string;
  unit?: string;
}
