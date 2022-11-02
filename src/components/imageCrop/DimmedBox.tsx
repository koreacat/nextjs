import {Size, Point, clamp} from './data';
import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';
import {MutableRefObject} from "react";

const cx = classnames.bind(styles);

interface DimmedBoxProps {
  imgSize: Size;
  setOffset: (offset: ((prev: Point) => Point) | Point) => void;
  setCropBoxSize: (cropBoxSize: Size) => void;
  wrapRef: MutableRefObject<HTMLDivElement>;
  cropAreaRef: MutableRefObject<HTMLDivElement>;
}

const DimmedBox = (
  {
    imgSize,
    setOffset,
    setCropBoxSize,
    wrapRef,
    cropAreaRef,
  }: DimmedBoxProps) => {

  const getOffsetTop = () => {
    return (wrapRef.current ? wrapRef.current.offsetTop : 0)
      + (cropAreaRef.current ? cropAreaRef.current?.offsetTop : 0);
  }

  const getOffsetLeft = () => {
    return (wrapRef.current ? wrapRef.current?.offsetLeft : 0)
      + (cropAreaRef.current ? cropAreaRef.current.offsetLeft : 0);
  }

  const startSetCropBox = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    const startPoint = {x: e.pageX, y: e.pageY};

    const initCropBox = () => {
      setOffset({
        x: startPoint.x - getOffsetLeft(),
        y: startPoint.y - getOffsetTop(),
      });
      setCropBoxSize({w: 0, h: 0});
    }

    const setCropBox = (e: MouseEvent) => {
      initCropBox();
      const w = e.pageX - startPoint.x;
      const h = e.pageY - startPoint.y;
      const x = startPoint.x - getOffsetLeft();
      const y = startPoint.y - getOffsetTop();
      const offsetX = ((w < 0) ? e.pageX : startPoint.x) - getOffsetLeft();
      const offsetY = ((h < 0) ? e.pageY : startPoint.y) - getOffsetTop();
      const maxCropBoxW = (w < 0) ? x : (imgSize.w - x);
      const maxCropBoxH = (h < 0) ? y : (imgSize.h - y);
      const cropBoxW = clamp(Math.abs(w), 0, maxCropBoxW);
      const cropBoxH = clamp(Math.abs(h), 0, maxCropBoxH);

      setOffset({x: Math.max(offsetX, 0), y: Math.max(offsetY, 0)});
      setCropBoxSize({w: cropBoxW, h: cropBoxH});
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