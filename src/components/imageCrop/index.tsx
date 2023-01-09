import React, { useEffect, useRef, useState } from 'react';
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
  onClick: (file: File) => void;
  onClose: () => void;
}

const ImageCrop = ({ imgSrc, imgName, width, height, onClick, onClose }: ImageCropProps) => {
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
      if (height > width) return width;
      else return Math.min(imgWidth * (height / imgHeight), width);
    }
    if (imgHeight > height) return Math.min(imgWidth, width) * (height / imgHeight);
    return Math.min(imgWidth, width);
  };

  const getHeight = (imgWidth: number, imgHeight: number) => {
    if (imgWidth > width && imgHeight > height) {
      if (height < width) return height;
      else return Math.min(imgHeight * (width / imgWidth), height);
    }
    if (imgWidth > width) return Math.min(imgHeight, height) * (width / imgWidth);
    return Math.min(imgHeight, height);
  };

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
    };
  };

  const convertCanvasToFile = (dataUrl: string) => {
    const blobBin = atob(dataUrl.split(',')[1]); // base64 데이터 디코딩
    const array = [];
    for (let i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    return new File([new Blob([new Uint8Array(array)], { type: 'image/png' })], imgName);
  };

  const handleSave = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imgEl = new Image();
    canvas.width = cropBoxSize.w;
    canvas.height = cropBoxSize.h;
    imgEl.src = imgSrc;
    imgEl.crossOrigin = 'anonymous';

    imgEl.onload = () => {
      const oc = document.createElement('canvas');
      const octx = oc.getContext('2d');
      oc.width = imgEl.width * widthRatio;
      oc.height = imgEl.height * heightRatio;
      octx?.drawImage(imgEl, 0, 0, oc.width, oc.height);
      ctx?.drawImage(oc, offset.x, offset.y, cropBoxSize.w, cropBoxSize.h, 0, 0, cropBoxSize.w, cropBoxSize.h);
      const file = convertCanvasToFile(canvas.toDataURL());
      onClick(file);
      onClose();
    };
  };

  if (!imgSrc) return null;

  return (
    <div className={cx('imageCropModal')}>
      <div className={cx('titleArea')}>
        <strong className={cx('title')}>사진 수정</strong>
        <div className={cx('btnArea')}>
          <a className={cx('btn', 'close')} role="button" onClick={onClose}>
            취소
          </a>
          <a className={cx('btn', 'save')} role="button" onClick={handleSave}>
            저장
          </a>
        </div>
      </div>

      <div className={cx('imageArea')}>
        <div
          ref={wrapRef}
          className={cx('wrap')}
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

            <DimmedBox imgSize={imgSize} setOffset={setOffset} setCropBoxSize={setCropBoxSize} />

            <CropBox
              imgSrc={imgSrc}
              imgSize={imgSize}
              offset={offset}
              setOffset={setOffset}
              cropBoxSize={cropBoxSize}
              setCropBoxSize={setCropBoxSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCrop;
