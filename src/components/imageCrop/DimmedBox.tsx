import { Size, Point, clamp } from './data';
import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface DimmedBoxProps {
  imgSize: Size;
  setOffset: (offset: ((prev: Point) => Point) | Point) => void;
  setCropBoxSize: (cropBoxSize: Size) => void;
  offsetTop: number;
  offsetLeft: number;
}

const DimmedBox = (
  {
    imgSize,
    setOffset,
    setCropBoxSize,
    offsetTop,
    offsetLeft,
  }: DimmedBoxProps) => {

  const startSetCropBox = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    const startPoint = { x: e.pageX, y: e.pageY };

    const initCropBox = () => {
      setOffset({
        x: startPoint.x - offsetLeft,
        y: startPoint.y - offsetTop,
      });
      setCropBoxSize({ w: 0, h: 0 });
    }

    const setCropBox = (e: MouseEvent) => {
      initCropBox();
      const w = e.pageX - startPoint.x;
      const h = e.pageY - startPoint.y;
      const x = startPoint.x - offsetLeft;
      const y = startPoint.y - offsetTop;
      const offsetX = ((w < 0) ? e.pageX : startPoint.x) - offsetLeft;
      const offsetY = ((h < 0) ? e.pageY : startPoint.y) - offsetTop;
      const maxCropBoxW = (w < 0) ? x : (imgSize.w - x);
      const maxCropBoxH = (h < 0) ? y : (imgSize.h - y);
      const cropBoxW = clamp(Math.abs(w), 0, maxCropBoxW);
      const cropBoxH = clamp(Math.abs(h), 0, maxCropBoxH);

      setOffset({ x: Math.max(offsetX, 0), y: Math.max(offsetY, 0) });
      setCropBoxSize({ w: cropBoxW, h: cropBoxH });
    }

    const stopSetCropBox = () => {
      document.removeEventListener("mousemove", setCropBox);
      document.removeEventListener("mouseup", stopSetCropBox);
    }

    document.addEventListener("mousemove", setCropBox);
    document.addEventListener("mouseup", stopSetCropBox);
  }

  return (
    <div
      className={cx('dimmedBox')}
      onMouseDown={startSetCropBox}
      style={{
        width: `${imgSize.w}px`,
        height: `${imgSize.h}px`,
      }}
    />
  )
}

export default DimmedBox;