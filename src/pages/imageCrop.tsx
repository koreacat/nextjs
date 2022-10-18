import Contents from "@components/contents";
import Layout from "@components/layout";
import { useState } from "react";
import ImageCrop from "src/components/imageCrop";

import styles from './../components/imageCrop/imageCrop.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const IMG_PATH = '/nextjs/img/imageCrop/imgTest.jpg';

const ImageCropPage = () => {
  const [imgSrc, setImgSrc] = useState(IMG_PATH);
  const [imgName, setImgName] = useState('');

  const encodeFileToBase64 = (fileBlob: File) => {
    if (!fileBlob) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    reader.onload = () => {
      setImgSrc(reader.result as string);
      setImgName(fileBlob.name);
    }
  };

  return (
    <Layout>
      <Contents>
        <div style={{ margin: '50px', paddingBottom: '100px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            <a className={cx('btnChoice')}>select images</a>
            <input
              style={{ display: 'none' }}
              type={'file'}
              accept={'image/png, image/jpeg, image/jpg'}
              onChange={e => encodeFileToBase64(e.target.files[0])}
            />
          </label>

          <div style={{ width: '360px', height: '600px' }}>
            <ImageCrop imgSrc={imgSrc} imgName={imgName} width={360} height={600}/>
          </div>
        </div>
      </Contents>
    </Layout>
  )
}

export default ImageCropPage;