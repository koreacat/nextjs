import { useEffect, useRef, useState } from 'react';
import { Size, Point, ORIGIN_POINT, ORIGIN_SIZE } from './data';
import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';
import DimmedBox from './DimmedBox';
import CropBox from './CropBox';
const cx = classnames.bind(styles);

interface ImageCropProps {
  imgSrc: string;
  imgName: string;
}

const ImageCrop = ({ imgSrc, imgName }: ImageCropProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [imgSize, setImgSize] = useState<Size>(ORIGIN_SIZE);
  const [cropBoxSize, setCropBoxSize] = useState<Size>(ORIGIN_SIZE);
  const [offset, setOffset] = useState<Point>(ORIGIN_POINT);

  useEffect(() => {
    init();
  }, [imgSrc]);

  const init = () => {
    const imgEl = new Image();
    imgEl.src = imgSrc;
    imgEl.onload = () => {
      setImgSize({ w: imgEl.width, h: imgEl.height });
      setCropBoxSize({ w: imgEl.width / 2, h: imgEl.height / 2 });
      setOffset({ x: imgEl.width / 4, y: imgEl.height / 4 });
    }
  }

  const download = (url: string) => {
    const a = document.createElement('a')
    a.href = url;
    a.download = imgName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imgEl = new Image();

    canvas.width = cropBoxSize.w;
    canvas.height = cropBoxSize.h;
    imgEl.src = imgSrc;

    imgEl.onload = () => {
      ctx.drawImage(
        imgEl,
        offset.x,
        offset.y,
        cropBoxSize.w,
        cropBoxSize.h,
        0,
        0,
        cropBoxSize.w,
        cropBoxSize.h,
      );
      download(canvas.toDataURL());
    }
  };

  if (!imgSrc) return null;

  return (
    <div
      ref={wrapRef}
      className={cx('wrap')}
      style={{
        width: `${imgSize.w}px`,
        height: `${imgSize.h}px`,
      }}
    >
      <div className={cx('cropArea')}>
        <div className={cx('imgArea')}>
          <div className={cx('imgBox')}>
            <img
              className={cx('img')}
              src={imgSrc}
              style={{
                width: `${imgSize.w}px`,
                height: `${imgSize.h}px`,
              }}
            />
          </div>
        </div>

        <DimmedBox
          wrapRef={wrapRef}
          imgSize={imgSize}
          setOffset={setOffset}
          setCropBoxSize={setCropBoxSize}
        />

        <CropBox
          wrapRef={wrapRef}
          imgSrc={imgSrc}
          imgSize={imgSize}
          offset={offset}
          setOffset={setOffset}
          cropBoxSize={cropBoxSize}
          setCropBoxSize={setCropBoxSize}
        />
      </div>

      <a className={cx('btn')} onClick={handleDownload}>download</a>
    </div>
  )
}

export default ImageCrop;