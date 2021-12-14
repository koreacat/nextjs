import { _ReactPixi, AnimatedSprite, Container, Graphics, PixiRef } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

export type IContainer = PixiRef<typeof Container>;
export type IAnimatedSprite = PixiRef<typeof AnimatedSprite>;
export type IGraphics = PixiRef<typeof Graphics>;

export interface IStage {
  props: _ReactPixi.IStage;
  app: PIXI.Application;
}

export const SpritesheetPath = '/nextjs/assets/mainInteraction/spritesheet.json';

export const ContainerWidth = 1120;
export const ContainerHeight = 536;
export const TotalFrameCount = 40;

export const getPosX = () => Math.round((window.innerWidth - ContainerWidth) / 2);
export const getPosY = () => Math.round((window.innerHeight - ContainerHeight) / 2);
export const getMaskingPosX = () => getPosX() + 270;
export const getMaskingPostY = () => getPosY() + 418;
