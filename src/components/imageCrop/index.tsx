import styles from './imageCrop.module.scss';
import classnames from 'classnames/bind';
import { useRef, useState } from 'react';
import CropBox from './CropBox';
const cx = classnames.bind(styles);

const IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';

export type DirType = 'e' | 'w' | 's' | 'n' | 'se' | 'sw' | 'ne' | 'nw';

export interface Size {
  w: number;
  h: number;
}

const ImageCrop = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [imgPath, setImgPath] = useState<string>(IMG_PATH);
  const [imgSize, setImgSize] = useState<Size>({ w: 412, h: 412 });

  return (
    <div ref={wrapRef} className={cx('wrap')}>
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
        <CropBox wrapRef={wrapRef} imgPath={imgPath} imgSize={imgSize}/>

      </div>
    </div>
  )
}

export default ImageCrop;