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
  width: number;
  height: number;
}

const ImageCrop = ({ imgSrc, imgName, width, height }: ImageCropProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cropAreaRef = useRef<HTMLDivElement>(null);
  const [imgSize, setImgSize] = useState<Size>(ORIGIN_SIZE);
  const [cropBoxSize, setCropBoxSize] = useState<Size>(ORIGIN_SIZE);
  const [offset, setOffset] = useState<Point>(ORIGIN_POINT);
  const [widthRatio, setWidthRatio] = useState<number>(1);
  const [heightRatio, setHeightRatio] = useState<number>(1);

  useEffect(() => {
    init();
  }, [imgSrc]);


  const getWidth = (imgWidth: number, imgHeight: number) => {
    if (imgWidth > width && imgHeight > height) {
      if(height > width) return width;
      return imgWidth * (height / imgHeight);
    }    
    if (imgHeight > height) return Math.min(imgWidth, width) * (height / imgHeight);
    return Math.min(imgWidth, width);
  }

  const getHeight = (imgWidth: number, imgHeight: number) => {
    if (imgWidth > width && imgHeight > height) {
      if(height < width)  return height;
      return imgHeight * (width / imgWidth);      
    }
    if (imgWidth > width) return Math.min(imgHeight, height) * (width / imgWidth);
    return Math.min(imgHeight, height);
  }

  const init = () => {
    const imgEl = new Image();
    imgEl.src = imgSrc;
    imgEl.onload = () => {
      const imgWidth = getWidth(imgEl.width, imgEl.height);
      const imgHeight = getHeight(imgEl.width, imgEl.height);

      setWidthRatio(imgWidth / imgEl.width);
      setHeightRatio(imgHeight / imgEl.height);
      setImgSize({ w: imgWidth, h: imgHeight });
      setCropBoxSize({ w: imgWidth / 2, h: imgHeight / 2 });
      setOffset({ x: imgWidth / 4, y: imgHeight / 4 });
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
      const oc = document.createElement('canvas');
      const octx = oc.getContext('2d');
      oc.width = imgEl.width * widthRatio;
      oc.height = imgEl.height * heightRatio;
      octx.drawImage(imgEl, 0, 0, oc.width, oc.height);

      ctx.drawImage(
        oc,
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
    <>
      <div ref={wrapRef} className={cx('wrap')}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <div 
          ref={cropAreaRef}
          className={cx('cropArea')}
          style={{
            width: `${imgSize.w}px`,
            height: `${imgSize.h}px`,
          }}
        >
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
            offsetTop={wrapRef.current?.offsetTop + cropAreaRef.current?.offsetTop}
            offsetLeft={wrapRef.current?.offsetLeft + cropAreaRef.current?.offsetLeft}
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

      </div>

      <a className={cx('btn')} onClick={handleDownload}>download</a>
    </>
  )
}

export default ImageCrop;