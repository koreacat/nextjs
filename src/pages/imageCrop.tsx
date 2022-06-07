import Contents from "@components/contents";
import Layout from "@components/layout";
import ImageCrop from "src/components/imageCrop";

const ImageCropPage = () => {
  return (
    <Layout>
      <Contents>
        <div style={{padding: '50px'}}>
          <ImageCrop/>
        </div>
      </Contents>
    </Layout>
  )
}

export default ImageCropPage;