import Contents from "@components/contents";
import Layout from "@components/layout";
import ImageCrop from "src/components/imageCrop";

const IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
const IMG_PATH2 = '/nextjs/img/matchIntroduce/imgMatch4.png';

const ImageCropPage = () => {
  return (
    <Layout>
      <Contents>
        <div style={{ margin: '50px'}}>
          <ImageCrop url={IMG_PATH2} />
        </div>
      </Contents>
    </Layout>
  )
}

export default ImageCropPage;