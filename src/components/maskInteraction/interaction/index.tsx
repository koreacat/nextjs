import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './mainInteraction.module.scss';
import Background from './Background';
import Foreground from './Foreground';
import MaskCircle from './MaskingCircle';
import { Stage, Container } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

import {
  getPosX,
  getPosY,
  getMaskingPostY,
  getMaskingPosX,
  IContainer,
  IGraphics,
  IStage,
  SpritesheetPath,
} from './data';

const cx = classnames.bind(styles);

const Interaction = () => {
  const stageRef = useRef<any>(null);
  const backgroundRef = useRef<IContainer | null>(null);
  const foregroundRef = useRef<IContainer | null>(null);
  const maskedContainerRef = useRef<IContainer | null>(null);
  const maskRef = useRef<IGraphics | null>(null);
  const [frames, setFrames] = useState<[]>([]);

  useEffect(() => {
    init();

    window.addEventListener('resize', setPos);
    return () => {
      window.removeEventListener('resize', setPos);
    };
  }, []);

  const init = () => {
    loadFrames();
    setPos();
    const stage: IStage = stageRef.current;
    if (stage) stage.app.resize();
    if (maskedContainerRef.current) maskedContainerRef.current.mask = maskRef.current;
  };

  const loadFrames = () => {
    try {
      PIXI﻿.utils.clearTextureCache();
      stageRef.current.app.loader.add(SpritesheetPath).load((_: any, resource: any) => {
        const keys: any = Object.keys(resource[SpritesheetPath].data.frames);
        setFrames(keys.map((frame: any) => PIXI.Texture.from(frame)));
      });
    } catch (e) {
      console.error(e);
    }
  };

  const setPos = () => {
    if (backgroundRef.current) {
      backgroundRef.current.x = getPosX();
      backgroundRef.current.y = getPosY();
    }

    if (foregroundRef.current) {
      foregroundRef.current.x = getPosX();
      foregroundRef.current.y = getPosY();
    }

    if (maskRef.current) {
      maskRef.current.x = getMaskingPosX();
      maskRef.current.y = getMaskingPostY();
    }
  };

  return (
    <div className={cx('canvasWrap')}>
      <Stage ref={stageRef} options={{ resizeTo: window, antialias: true, resolution: 1 }}>
        <Background backgroundRef={backgroundRef} frames={frames} />
        <Container ref={maskedContainerRef} width={window.innerWidth} height={window.innerHeight}>
          <Foreground foregroundRef={foregroundRef} />
          <MaskCircle maskRef={maskRef} />
        </Container>
      </Stage>
    </div>
  );
};

export default Interaction;
