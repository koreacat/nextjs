import bezierEasing, { EasingFunction } from 'bezier-easing';
export type EasingType = 'liner' | 'midSlow' | 'ease' | 'easeIn';

export const Easing: Record<string, EasingFunction> = {
  liner: bezierEasing(0, 0, 0, 0),
  midSlow: bezierEasing(0, 0.7, 1, 0.3),
  ease: bezierEasing(0.25, 0.1, 0.25, 1.0),
  easeIn: bezierEasing(0.38, 0.01, 0.78, 0.13),
};
