import React, { MutableRefObject } from 'react';
import { Container, Graphics, Text } from '@inlet/react-pixi';
import { ContainerHeight, ContainerWidth, IContainer } from './data';
import * as PIXI from 'pixi.js';

interface SpotlightProps {
  foregroundRef: MutableRefObject<IContainer | null>;
}

// 초록색 배경
const Foreground = ({ foregroundRef }: SpotlightProps) => {
  return (
    <>
      <Graphics
        draw={(g) => {
          g.clear();
          g.beginFill(0x6cdd83, 1);
          g.drawRoundedRect(0, 0, 10000, 10000, 0);
          g.endFill();
        }}
      />
      <Container ref={foregroundRef} width={ContainerWidth} height={ContainerHeight}>
        <Text
          text={'잡다,\n취업의\n상식을 깨다'}
          y={10}
          style={
            new PIXI.TextStyle({
              fontFamily: 'Pretendard',
              fontSize: 120,
              fontWeight: '800',
              lineHeight: 152,
              letterSpacing: 0.2,
              fill: 0x000000,
            })
          }
        />
      </Container>
    </>
  );
};

export default Foreground;
