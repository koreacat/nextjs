import React from 'react';
import {TotalFrameCount, getMaskingPostY, getMaskingPosX, IGraphics} from './data';
import {Graphics} from '@inlet/react-pixi';
import { Power1, Power2, Power3 } from 'gsap/gsap-core';
import gsap from 'gsap';

type AnimationType = 'open' | 'close' | null;

// 초록색점이 점점 커지면서 전체 화면이 전환된다.
export default class MaskCircle extends React.Component<any> {
  private tl = gsap.timeline();
  private lastScrollTop = 0;
  private lastAnimation: AnimationType = null;
  private obj = {r: 0};

  constructor(props: { maskRef: IGraphics }) {
    super(props);
    this.state = {r: 0};
  }

  componentDidMount = () => {
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', this.onScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll);
  };

  openAnimation = () => {
    if (this.lastAnimation === 'open') return;
    this.lastAnimation = 'open';

    this.tl.clear();
    this.tl.to(this.obj, {
      r: 550,
      duration: 1,
      ease: Power2.easeInOut,
      onUpdate: () => this.setState(this.obj),
    });

    this.tl.to(this.obj, {
      r: 5000,
      duration: 1.4,
      ease: Power3.easeInOut,
      onUpdate: () => this.setState(this.obj),
    });
  };

  closeAnimation = () => {
    if (this.lastAnimation !== 'open') return;
    this.lastAnimation = 'close';

    this.tl.clear();
    this.tl.to(this.obj, {
      r: 0,
      duration: 0.7,
      ease: Power1.easeInOut,
      onUpdate: () => this.setState(this.obj),
    });
  };

  onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollDir = scrollTop > this.lastScrollTop ? 'DOWN' : 'UP';
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    if (scrollTop > TotalFrameCount * 100 + 300 && scrollDir === 'DOWN') {
      this.openAnimation();
    } else if (scrollTop < TotalFrameCount * 100 + 3300 && scrollDir === 'UP') {
      this.closeAnimation();
    }
  };

  render() {
    // @ts-ignore
    const r = this.state.r;

    return (
      <Graphics
        ref={this.props.maskRef}
        x={getMaskingPosX()}
        y={getMaskingPostY()}
        draw={(g) => {
          g.clear();
          g.moveTo(0, 0);
          g.beginFill(0x000000, 1);
          g.drawCircle(0, 0, r);
          g.endFill();
        }}
      />
    );
  }
}
