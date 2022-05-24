import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  ReactElement
} from "react";

import styles from './bubbleChart.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface ChartData {
  point: Point;
  r: number;
  fill: string;
  title: string;
  toolTip?: ReactElement;
}

interface CanvasProps {
  canvasWidth: number;
  canvasHeight: number;
  chartDataList?: ChartData[];
};

interface Point {
  x: number;
  y: number;
};

const ORIGIN = Object.freeze({ x: 0, y: 0 });
const RATIO = 1;

function diffPoints(p1: Point, p2: Point) {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function addPoints(p1: Point, p2: Point) {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
}

function scalePoint(p1: Point, scale: number) {
  return { x: p1.x / scale, y: p1.y / scale };
}

const ZOOM_SENSITIVITY = 500; // bigger for lower zoom per scroll

const BubbleChar = ({ canvasWidth, canvasHeight, chartDataList }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [offset, setOffset] = useState<Point>(ORIGIN);
  const [mousePos, setMousePos] = useState<Point>(ORIGIN);
  const [viewportTopLeft, setViewportTopLeft] = useState<Point>(ORIGIN);
  const [toolTipEl, setToolTipEl] = useState(<></>);
  const [toolTipPos, setToolTipPos] = useState({ x: '0px', y: '0px' });
  const isResetRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<Point>(ORIGIN);
  const lastOffsetRef = useRef<Point>(ORIGIN);

  // update last offset
  useEffect(() => {
    lastOffsetRef.current = offset;
  }, [offset]);

  // add event listener on canvas for mouse position
  useEffect(() => {
    const el = canvasRef.current;
    if (el === null) return;

    function handleUpdateMouse(event: MouseEvent) {
      event.preventDefault();
      if (canvasRef.current) {
        const viewportMousePos = { x: event.offsetX, y: event.offsetY };
        const topLeftCanvasPos = {
          x: canvasRef.current.offsetLeft,
          y: canvasRef.current.offsetTop
        };
        setMousePos(diffPoints(viewportMousePos, topLeftCanvasPos));
      }
    }

    el.addEventListener("mousemove", handleUpdateMouse);
    el.addEventListener("wheel", handleUpdateMouse);
    return () => {
      el.removeEventListener("mousemove", handleUpdateMouse);
      el.removeEventListener("wheel", handleUpdateMouse);
    };
  }, []);

  // add event listener on canvas for zoom
  useEffect(() => {
    const el = canvasRef.current;
    if (el === null) return;

    // this is tricky. Update the viewport's "origin" such that
    // the mouse doesn't move during scale - the 'zoom point' of the mouse
    // before and after zoom is relatively the same position on the viewport
    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      if (ctx) {
        const zoom = 1 - event.deltaY / ZOOM_SENSITIVITY;

        if (scale * zoom < 0.3) return;
        if (scale * zoom > 3) return;

        const viewportTopLeftDelta = {
          x: (mousePos.x / scale) * (1 - 1 / zoom),
          y: (mousePos.y / scale) * (1 - 1 / zoom)
        };
        const newViewportTopLeft = addPoints(
          viewportTopLeft,
          viewportTopLeftDelta
        );

        ctx.translate(viewportTopLeft.x, viewportTopLeft.y);
        ctx.scale(zoom, zoom);
        ctx.translate(-newViewportTopLeft.x, -newViewportTopLeft.y);

        setViewportTopLeft(newViewportTopLeft);
        setScale(scale * zoom);
        isResetRef.current = false;
      }
    }

    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, [ctx, mousePos.x, mousePos.y, viewportTopLeft, scale]);

  // setup canvas and set context
  useLayoutEffect(() => {
    if (!canvasRef) return;
    const renderCtx = canvasRef.current.getContext("2d");
    if (renderCtx) reset(renderCtx);
  }, [canvasHeight, canvasWidth, chartDataList]);

  // pan when offset or scale changes
  useLayoutEffect(() => {
    if (ctx && lastOffsetRef.current) {
      const offsetDiff = scalePoint(
        diffPoints(offset, lastOffsetRef.current),
        scale
      );
      ctx.translate(offsetDiff.x, offsetDiff.y);
      setViewportTopLeft((prevVal) => diffPoints(prevVal, offsetDiff));
      isResetRef.current = false;
    }
  }, [ctx, offset, scale]);

  // draw
  useLayoutEffect(() => {
    if (ctx) {
      const storedTransform = ctx.getTransform();
      ctx.canvas.width = ctx.canvas.width;
      ctx.setTransform(storedTransform);

      drawGrid();
      drawCircles();
      drawText();
    }
  }, [
    canvasWidth,
    canvasHeight,
    chartDataList,
    ctx,
    scale,
    offset,
    viewportTopLeft
  ]);

  const drawGrid = () => {
    const GRID_SCALE = 20;
    const s = 110;
    const nX = Math.floor(canvasWidth * GRID_SCALE / s) - 2;
    const nY = Math.floor(canvasHeight * GRID_SCALE / s) - 2;
    const pX = canvasWidth - nX * s;
    const pY = canvasHeight - nY * s;

    const pL = Math.ceil(pX / 2) - 0.5;
    const pT = Math.ceil(pY / 2) - 0.5;
    const pR = canvasWidth - nX * s - pL;
    const pB = canvasHeight - nY * s - pT;

    ctx.strokeStyle = 'lightgrey';
    ctx.beginPath();
    for (let x = pL; x <= canvasWidth - pR; x += s) {
      ctx.moveTo(x, pT);
      ctx.lineTo(x, canvasHeight - pB);
    }
    for (let y = pT; y <= canvasHeight - pB; y += s) {
      ctx.moveTo(pL, y);
      ctx.lineTo(canvasWidth - pR, y);
    }
    ctx.stroke();
  }

  const drawCircles = () => {
    if (!chartDataList) return;
    const sortedList = chartDataList.sort((a, b) => {
      return b.r - a.r;
    })

    sortedList.forEach(({ point: { x, y }, r, fill }) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = fill;
      ctx.fill();
    })
  }

  const drawText = () => {
  }

  // reset
  const reset = (ctx: CanvasRenderingContext2D) => {
    if (!ctx && isResetRef.current) return;
    // adjust for device pixel density
    ctx.canvas.width = canvasWidth * RATIO;
    ctx.canvas.height = canvasHeight * RATIO;
    ctx.scale(RATIO, RATIO);
    setScale(1);

    // reset state and refs
    setCtx(ctx);
    setOffset(ORIGIN);
    setMousePos(ORIGIN);
    setViewportTopLeft(ORIGIN);
    lastOffsetRef.current = ORIGIN;
    lastMousePosRef.current = ORIGIN;

    // this thing is so multiple resets in a row don't clear canvas
    isResetRef.current = true;
  };

  // functions for panning
  const mouseMove = (e: MouseEvent) => {
    if (!ctx) return;
    const lastMousePos = lastMousePosRef.current;
    const currentMousePos = { x: e.offsetX, y: e.offsetY };
    lastMousePosRef.current = currentMousePos;
    const mouseDiff = diffPoints(currentMousePos, lastMousePos);
    setOffset((prevOffset) => addPoints(prevOffset, mouseDiff));
  }

  const mouseUp = () => {
    canvasRef.current.style.cursor = "crosshair";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  const startPan = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    canvasRef.current.style.cursor = "grabbing";
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    lastMousePosRef.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!ctx || !chartDataList) return;
    setToolTipEl(null);

    chartDataList.forEach(({ point: { x, y }, r, toolTip }) => {
      const circle = new Path2D();
      circle.arc(x, y, r, 0, 2 * Math.PI);
      if (ctx.isPointInPath(circle, e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        setToolTipPos({ x: `${e.nativeEvent.offsetX}px`, y: `${e.nativeEvent.offsetY - 50}px` });
        setToolTipEl(toolTip);
        return;
      }
    });
  }

  return (
    <div className={cx('wrap')} style={{ width: canvasWidth * RATIO }}>
      <canvas
        onMouseMove={handleMouseMove}
        onMouseDown={startPan}
        ref={canvasRef}
        width={canvasWidth * RATIO}
        height={canvasHeight * RATIO}
        style={{
          cursor: "crosshair",
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`
        }}
      />
      <div
        className={cx('tooltipWrap')}
        style={{
          transform: `translate(${toolTipPos.x}, ${toolTipPos.y})`,
        }}
      >
        {toolTipEl}
      </div>
      <span className={cx('scale')}>scale: {scale.toFixed(2)}</span>
      <button className={cx('btn')} onClick={() => ctx && reset(ctx)}>Reset</button>
    </div>
  )
}

export default BubbleChar;