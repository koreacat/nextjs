import Contents from "@components/contents";
import Layout from "@components/layout";
import { useState } from "react";
import ImageCrop from "src/components/imageCrop";

import styles from './../components/imageCrop/imageCrop.module.scss';
import classnames from 'classnames/bind';
import Modal from "@components/modal";
const cx = classnames.bind(styles);

const IMG_PATH = '/nextjs/img/imageCrop/imgTest.jpg';

const ImageCropPage = () => {
  const [imgSrc, setImgSrc] = useState(IMG_PATH);
  const [imgName, setImgName] = useState('');
  const [cropImgScr, setCropImgScr] = useState<string>(''); // 크롭 모달에 표시되는 이미지 입니다.
  const [cropModalVisible, setCropModalVisible] = useState(false);


  /** onChage로 변경된 파일로 기본 정보 src, 이미지 크롭 src 를 설정 해주세요. */
  const handleUpload = async (file?: File) => {
    if (!file) return;
    setCropImgScr(URL.createObjectURL(file));
    setImgName(file.name);
    setCropModalVisible(true);
  };

  /** 크롭된 이미지가 file 로 넘어옵니다. */
  const setProfileImage = async (file: File) => {
    setImgSrc(URL.createObjectURL(file));
  };

  return (
    <Layout>
      <Contents>
        <div style={{ margin: '50px', paddingBottom: '100px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            <a className={cx('btnChoice')}>select images</a>
            <input type='file' className={cx('hidden')} value={[]} onChange={e => handleUpload(e.target.files?.[0])} />
          </label>

          <img src={imgSrc}/>

          <Modal visible={cropModalVisible}>
            <ImageCrop
              imgSrc={cropImgScr}
              imgName={imgName}
              width={560}
              height={560}
              onClick={setProfileImage}
              onClose={() => setCropModalVisible(false)}
            />
          </Modal>
        </div>
      </Contents>
    </Layout>
  )
}

export default ImageCropPage;