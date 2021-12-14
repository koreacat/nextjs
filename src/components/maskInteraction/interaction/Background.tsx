import {AnimatedSprite, Container, Graphics, Sprite, Text} from '@inlet/react-pixi';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import {ContainerHeight, ContainerWidth, TotalFrameCount, IAnimatedSprite, IContainer} from './data';
import * as PIXI from 'pixi.js';

interface BackgroundProps {
  backgroundRef: MutableRefObject<IContainer | null>;
  frames: [];
}

// 검정색 배경
const Background = ({ backgroundRef, frames }: BackgroundProps) => {
  const aniRef = useRef<IAnimatedSprite | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;

    if (aniRef.current && scrollTop < TotalFrameCount * 100 + 100) {
      aniRef.current.gotoAndStop(scrollTop / 100);
    }
  };

  return (
    <Container ref={backgroundRef} width={ContainerWidth} height={ContainerHeight}>
      <Text
        text={'취업의\n상식'}
        y={162}
        style={
          new PIXI.TextStyle({
            fontFamily: 'Pretendard',
            fontSize: 120,
            fontWeight: '800',
            lineHeight: 152,
            letterSpacing: 0.2,
            fill: 0xffffff,
          })
        }
      />

      <Graphics
        x={269}
        y={418}
        draw={(g) => {
          g.clear();
          g.moveTo(0, 0);
          g.beginFill(0x6cdd83, 1);
          g.drawCircle(0, 0, 20);
          g.endFill();
        }}
      />

      <Sprite
        image={'/nextjs/assets/mainInteraction/iconMouse.png'}
        x={4}
        y={480}
        scale={0.55}
      />

      {frames.length !== 0 && (
        <AnimatedSprite ref={aniRef} position={[54, 204]} textures={frames} isPlaying={false} initialFrame={0} />
      )}
    </Container>
  );
};

export default Background;
