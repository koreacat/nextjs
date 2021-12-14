import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import MaskInteraction from "../components/maskInteraction";

const MaskInteractionPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <MaskInteraction/>
      </Contents>
    </Layout>
  )
};

export default MaskInteractionPage;
