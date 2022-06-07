import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CropBox from './CropBox';
import { Size, Point, ORIGIN_POINT, ORIGIN_SIZE } from './data';
const cx = classnames.bind(styles);

interface ImageCropProps {
  url: string;
}

const ImageCrop = ({ url }: ImageCropProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [imgPath, setImgPath] = useState<string>('');
  const [imgSize, setImgSize] = useState<Size>(ORIGIN_SIZE);
  const [cropBoxSize, setCropBoxSize] = useState<Size>(ORIGIN_SIZE);
  const [offset, setOffset] = useState<Point>(ORIGIN_POINT);

  useEffect(() => {
    const imgEl = new Image();
    imgEl.src = url;

    imgEl.addEventListener('load', () => {
      setImgPath(url);
      setImgSize({w: imgEl.width, h: imgEl.height});
      setCropBoxSize({ w: imgEl.width / 2, h: imgEl.height / 2 });
      setOffset({ x: imgEl.width / 4, y: imgEl.width / 4 });
    })
  }, []);

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

        {/* 이미지 영역 */}
        <div className={cx('imgArea')}>
          <div className={cx('imgBox')}>
            <img
              className={cx('img')}
              src={imgPath}
              style={{
                width: `${imgSize.w}px`,
                height: `${imgSize.h}px`,
              }}
            />
          </div>
        </div>

        {/* dimmed 영역 박스 */}
        <div className={cx('dimmedBox')} />

        {/* crop 영역 박스 */}
        <CropBox
          wrapRef={wrapRef}
          imgPath={imgPath}
          imgSize={imgSize}
          offset={offset}
          setOffset={setOffset}
          cropBoxSize={cropBoxSize}
          setCropBoxSize={setCropBoxSize}
        />

      </div>
    </div>
  )
}

export default ImageCrop;