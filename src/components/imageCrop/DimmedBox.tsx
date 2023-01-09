import { Size, Point, clamp } from './data';
import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface DimmedBoxProps {
  imgSize: Size;
  setOffset: (offset: ((prev: Point) => Point) | Point) => void;
  setCropBoxSize: (cropBoxSize: Size) => void;
}

const DimmedBox = ({ imgSize, setOffset, setCropBoxSize }: DimmedBoxProps) => {
  const getOffsetTop = () => {
    console.log((window.innerHeight - 666) / 2 + 106 + (560 - imgSize.h) / 2);
    return (window.innerHeight - 666) / 2 + 106 + (560 - imgSize.h) / 2;
  };

  const getOffsetLeft = () => {
    return (window.innerWidth - imgSize.w) / 2;
  };

  const startSetCropBox = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    const startPoint = { x: e.clientX, y: e.clientY };

    const initCropBox = () => {
      setOffset({
        x: startPoint.x - getOffsetLeft(),
        y: startPoint.y - getOffsetTop(),
      });
      setCropBoxSize({ w: 0, h: 0 });
    };

    const setCropBox = (e: MouseEvent) => {
      initCropBox();
      const w = e.clientX - startPoint.x;
      const h = e.clientY - startPoint.y;
      const x = startPoint.x - getOffsetLeft();
      const y = startPoint.y - getOffsetTop();
      const offsetX = (w < 0 ? e.clientX : startPoint.x) - getOffsetLeft();
      const offsetY = (h < 0 ? e.clientY : startPoint.y) - getOffsetTop();
      const maxCropBoxW = w < 0 ? x : imgSize.w - x;
      const maxCropBoxH = h < 0 ? y : imgSize.h - y;
      const cropBoxW = clamp(Math.abs(w), 0, maxCropBoxW);
      const cropBoxH = clamp(Math.abs(h), 0, maxCropBoxH);

      setOffset({ x: Math.max(offsetX, 0), y: Math.max(offsetY, 0) });
      setCropBoxSize({ w: cropBoxW, h: cropBoxH });
    };

    const stopSetCropBox = () => {
      document.removeEventListener('mousemove', setCropBox);
      document.removeEventListener('mouseup', stopSetCropBox);
    };

    document.addEventListener('mousemove', setCropBox);
    document.addEventListener('mouseup', stopSetCropBox);
  };

  return (
    <div
      className={cx('dimmedBox')}
      onMouseDown={startSetCropBox}
      style={{
        width: `${imgSize.w}px`,
        height: `${imgSize.h}px`,
      }}
    />
  );
};

export default DimmedBox;
