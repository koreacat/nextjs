import {AnimatedSprite, Container, Graphics, Sprite, Text} from '@inlet/react-pixi';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {ContainerHeight, ContainerWidth, TotalFrameCount, IAnimatedSprite, IContainer} from './data';
import * as PIXI from 'pixi.js';

interface BackgroundProps {
  backgroundRef: MutableRefObject<IContainer | null>;
  frames: [];
}

let tnum = 0;

// 검정색 배경
const Background = ({ backgroundRef, frames }: BackgroundProps) => {
  const aniRef = useRef<IAnimatedSprite | null>(null);

  const [num, setNum] = useState(0);
  const letterArr = ['','','','', 'ㅊ', '추', '취', '취ㅇ', '취어',
    '취업', '취업ㅇ', '취업으', '취업의', '취업의', '취업의', '취업의', '취업의\nㅅ',
    '취업의\n사', '취업의\n상', '취업의\n상ㅅ', '취업의\n상시', '취업의\n상식'
  ];

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    tnum = 0;

    const interval = setInterval(() => {
      if(tnum > letterArr.length - 2) clearInterval(interval);
      setNum(tnum++);
    }, 90);

    return () => {
      clearInterval(interval);
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
        text={letterArr[num]}
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
