import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';
import { RefObject, useRef } from 'react';
import { Point, Size, ORIGIN_POINT, DirType, LINE_DIR, POINT_DIR } from './data';
const cx = classnames.bind(styles);

function diffPoints(p1: Point, p2: Point) {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function addPoints(p1: Point, p2: Point, minX = 0, minY = 0, maxX = 0, maxY = 0) {
  const x = p1.x + p2.x;
  const y = p1.y + p2.y;
  return {
    x: (x < minX) ? minX : (x > maxX) ? maxX : x,
    y: (y < minY) ? minY : (y > maxY) ? maxY : y,
  };
}

interface CropBoxProps {
  wrapRef: RefObject<HTMLDivElement>;
  imgPath: string;
  imgSize: Size;
  offset: Point;
  setOffset: (offset: ((prev: Point) => Point) | Point) => void;
  cropBoxSize: Size;
  setCropBoxSize: (cropBoxSize: Size) => void;
}

const CropBox = (
  { 
    wrapRef, 
    imgPath, 
    imgSize,
    offset,
    setOffset,
    cropBoxSize,
    setCropBoxSize,
  }: CropBoxProps) => {
  const lastMousePosRef = useRef<Point>(ORIGIN_POINT);

  const getEdgeWidth = () => imgSize.w - cropBoxSize.w;
  const getEdgeHeight = () => imgSize.h - cropBoxSize.h;

  const startPan = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    document.addEventListener("mousemove", moveCropBox);
    document.addEventListener("mouseup", stopPan);
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  }

  const moveCropBox = (e: MouseEvent) => {
    const lastMousePos = lastMousePosRef.current;
    const currentMousePos = { x: e.clientX, y: e.clientY };
    const mouseDiff = diffPoints(currentMousePos, lastMousePos);

    lastMousePosRef.current = currentMousePos;
    setOffset((prevOffset) =>
      addPoints(prevOffset, mouseDiff, 0, 0, getEdgeWidth(), getEdgeHeight())
    );
  }

  const stopPan = () => {
    document.removeEventListener("mousemove", moveCropBox);
    document.removeEventListener("mouseup", stopPan);
  }

  const startSetSize = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, dir: DirType) => {
    e.preventDefault();

    const eLineX = offset.x + cropBoxSize.w;
    const wLineX = offset.x;
    const sLineY = offset.y + cropBoxSize.h;
    const nLineY = offset.y;

    const setSizeCropBox = (e: MouseEvent) => {
      const x = e.pageX - wrapRef.current.offsetLeft;
      const y = e.pageY - wrapRef.current.offsetTop;

      setBox({
        x: (x < 0) ? 0 : (x > imgSize.w) ? imgSize.w : x,
        y: (y < 0) ? 0 : (y > imgSize.h) ? imgSize.h : y,
      });
    }

    const setBox = (currentMousePos) => {
      const isCrossEL = !(wLineX + cropBoxSize.w > currentMousePos.x);
      const isCrossWL = eLineX - cropBoxSize.w > currentMousePos.x;
      const isCrossSL = !(nLineY + cropBoxSize.h > currentMousePos.y);
      const isCrossNL = sLineY - cropBoxSize.h > currentMousePos.y;

      const eXOffset = eLineX - cropBoxSize.w - (offset.x - currentMousePos.x);
      const wXOffset = wLineX - (offset.x - currentMousePos.x);
      const sYOffset = sLineY - cropBoxSize.h - (offset.y - currentMousePos.y);
      const nYOffset = nLineY - (offset.y - currentMousePos.y);

      const eCrossW = eLineX - cropBoxSize.w - currentMousePos.x;
      const wCrossW = currentMousePos.x - wLineX - cropBoxSize.w;
      const sCrossH = sLineY - cropBoxSize.h - currentMousePos.y;
      const nCrossH = currentMousePos.y - nLineY - cropBoxSize.h;

      const eW = cropBoxSize.w + currentMousePos.x - eLineX;
      const wW = cropBoxSize.w + wLineX - currentMousePos.x;
      const sH = cropBoxSize.h + currentMousePos.y - sLineY;
      const nH = cropBoxSize.h + nLineY - currentMousePos.y;

      switch (dir) {
        case 'e':
          if (isCrossWL) {
            setOffset({ x: eXOffset, y: offset.y });
            setCropBoxSize({ w: eCrossW, h: cropBoxSize.h });
          } else {
            setCropBoxSize({ w: eW, h: cropBoxSize.h });
          }
          break;
        case 'w':
          if (isCrossEL) {
            setCropBoxSize({ w: wCrossW, h: cropBoxSize.h });
          } else {
            setOffset({ x: wXOffset, y: offset.y });
            setCropBoxSize({ w: wW, h: cropBoxSize.h });
          }
          break;
        case 's':
          if (isCrossNL) {
            setOffset({ x: offset.x, y: sYOffset });
            setCropBoxSize({ w: cropBoxSize.w, h: sCrossH });
          } else {
            setCropBoxSize({ w: cropBoxSize.w, h: sH });
          }
          break;
        case 'n':
          if (isCrossSL) {
            setCropBoxSize({ w: cropBoxSize.w, h: nCrossH });
          } else {
            setOffset({ x: offset.x, y: nYOffset });
            setCropBoxSize({ w: cropBoxSize.w, h: nH });
          }
          break;
        case 'se':
          if (isCrossNL && isCrossWL) {
            setOffset({ x: eXOffset, y: sYOffset });
            setCropBoxSize({ w: eCrossW, h: sCrossH });
          } else if (isCrossWL) {
            setOffset({ x: eXOffset, y: offset.y });
            setCropBoxSize({ w: eCrossW, h: sH });
          } else if (isCrossNL) {
            setOffset({ x: offset.x, y: sYOffset });
            setCropBoxSize({ w: eW, h: sCrossH });
          } else {
            setCropBoxSize({ w: eW, h: sH });
          }
          break;
        case 'sw':
          if (isCrossNL && isCrossEL) {
            setOffset({ x: offset.x + cropBoxSize.w, y: nYOffset });
            setCropBoxSize({ w: wCrossW, h: sCrossH });
          } else if (isCrossEL) {
            setCropBoxSize({ w: wCrossW, h: sH });
          } else if (isCrossNL) {
            setOffset({ x: wXOffset, y: nYOffset });
            setCropBoxSize({ w: wW, h: sCrossH });
          } else {
            setOffset({ x: wXOffset, y: offset.y });
            setCropBoxSize({ w: wW, h: sH });
          }
          break;
        case 'ne':
          if (isCrossSL && isCrossWL) {
            setOffset({ x: eXOffset, y: offset.y + cropBoxSize.h });
            setCropBoxSize({ w: eCrossW, h: nCrossH });
          } else if (isCrossWL) {
            setOffset({ x: eXOffset, y: nYOffset });
            setCropBoxSize({ w: eCrossW, h: nH });
          } else if (isCrossSL) {
            setCropBoxSize({ w: eW, h: nCrossH });
          } else {
            setOffset({ x: offset.x, y: nYOffset });
            setCropBoxSize({ w: eW, h: nH });
          }
          break;
        case 'nw':
          if (isCrossSL && isCrossEL) {
            setCropBoxSize({ w: wCrossW, h: nCrossH });
          } else if (isCrossEL) {
            setOffset({ x: offset.x + cropBoxSize.w, y: nYOffset });
            setCropBoxSize({ w: wCrossW, h: nH });
          } else if (isCrossSL) {
            setOffset({ x: wXOffset, y: offset.y + cropBoxSize.h });
            setCropBoxSize({ w: wW, h: nCrossH });
          } else {
            setOffset({ x: wXOffset, y: nYOffset });
            setCropBoxSize({ w: wW, h: nH });
          }
          break;
      }
    }

    const stopSetSize = () => {
      document.removeEventListener("mousemove", setSizeCropBox);
      document.removeEventListener("mouseup", stopSetSize);
    }

    document.addEventListener("mousemove", setSizeCropBox);
    document.addEventListener("mouseup", stopSetSize);
  }

  const getDash = () => ['w', 'h'].map((dir) =>
    <span key={dir} className={cx('dash', dir)} />
  )

  const getLine = () => LINE_DIR.map((dir: DirType) =>
    <span key={dir} className={cx('line', dir)} onMouseDown={e => startSetSize(e, dir)} />
  )

  const getPoints = () => POINT_DIR.map((dir: DirType) =>
    <span key={dir} className={cx('point', dir)} onMouseDown={e => startSetSize(e, dir)} />
  )

  return (
    <div
      className={cx('cropBox')}
      style={{
        width: `${cropBoxSize.w}px`,
        height: `${cropBoxSize.h}px`,
        transform: `translateX(${offset.x}px) translateY(${offset.y}px)`
      }}
    >

      {/* 이미지 영역 */}
      <span className={cx('viewBox')}>
        <img
          className={cx('viewImg')}
          src={imgPath}
          style={{
            width: `${imgSize.w}px`,
            height: `${imgSize.h}px`,
            transform: `translateX(-${offset.x}px) translateY(-${offset.y}px)`
          }}
        />
      </span>

      {/* 격자 영역 */}
      {getDash()}

      {/* 중앙 십자가 영역 */}
      <span className={cx('cross')} />

      {/* 커서 영역 */}
      <span className={cx('moveBox')} onMouseDown={startPan} />

      {/* 보더 영역 */}
      {getLine()}

      {/* 점 영역 */}
      {getPoints()}
      
      <span className={cx('cropBoxInfo')}>
        {offset.x}, {offset.y}
        <br/>
        {cropBoxSize.w}, {cropBoxSize.h} (px)
      </span>
    </div>
  )
}

export default CropBox;