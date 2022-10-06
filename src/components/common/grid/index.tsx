import classnames from 'classnames/bind';
import styles from './grid.module.scss';
import {useLayoutEffect, useRef, useState} from "react";

const cx = classnames.bind(styles);

const RATIO = 1;

interface GridProps {
  canvasWidth?: number;
  canvasHeight?: number;
  size?: number;
}

const Grid = ({canvasWidth = 10000, canvasHeight = 10000, size = 100}: GridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [visible, setVisible] = useState(true);

  // setup canvas and set context
  useLayoutEffect(() => {
    if (!canvasRef) return;
    const renderCtx = canvasRef.current.getContext("2d");
    if (renderCtx) reset(renderCtx);
  }, [canvasHeight, canvasWidth]);

  // draw
  useLayoutEffect(() => {
    if (ctx) {
      const storedTransform = ctx.getTransform();
      ctx.canvas.width = ctx.canvas.width;
      ctx.setTransform(storedTransform);

      drawGrid();
    }
  }, [
    ctx,
  ]);

  // reset
  const reset = (ctx: CanvasRenderingContext2D) => {
    if (!ctx) return;
    ctx.canvas.width = canvasWidth * RATIO;
    ctx.canvas.height = canvasHeight * RATIO;
    ctx.scale(RATIO, RATIO);

    // reset state and refs
    setCtx(ctx);
  };

  const drawGrid = () => {
    const GRID_SCALE = 50;
    const nX = Math.floor(canvasWidth * GRID_SCALE / size) - 2;
    const nY = Math.floor(canvasHeight * GRID_SCALE / size) - 2;
    const pX = canvasWidth - nX * size;
    const pY = canvasHeight - nY * size;

    const pL = Math.ceil(pX / 2) - 0.5;
    const pT = Math.ceil(pY / 2) - 0.5;
    const pR = canvasWidth - nX * size - pL;
    const pB = canvasHeight - nY * size - pT;

    ctx.strokeStyle = '#f2f2f2';
    ctx.beginPath();
    for (let x = pL; x <= canvasWidth - pR; x += size) {
      ctx.moveTo(x, pT);
      ctx.lineTo(x, canvasHeight - pB);
    }
    for (let y = pT; y <= canvasHeight - pB; y += size) {
      ctx.moveTo(pL, y);
      ctx.lineTo(canvasWidth - pR, y);
    }
    ctx.stroke();
  }

  return (
    <div className={cx('gridArea')}>
      <div className={cx('checkboxArea')}>
        <input
          checked={visible}
          onChange={() => {
            setVisible(prev => !prev);
            }
          }
          type={'checkbox'}
          className={cx('onOff')}
        />
        <span>grid</span>
      </div>

      <canvas
        ref={canvasRef}
        width={canvasWidth * RATIO}
        height={canvasHeight * RATIO}
        style={{
          display: visible ? 'flex' : 'none',
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`
        }}
      />
    </div>
  )
}

export default Grid;