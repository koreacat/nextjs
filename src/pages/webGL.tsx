import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import WebGL from "src/components/webGL";

const WebGLPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <WebGL/>
      </Contents>
    </Layout>
  )
};

export default WebGLPage;
