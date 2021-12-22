import Layout from "@components/layout";
import ScrollInteraction from "src/components/scrollInteraction";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";

const JobdaIntroductionPage = () => {
  return (
    <Layout>
      {/*<Header/>*/}
      {/*<FixedHeader/>*/}
      <Contents>
        <ScrollInteraction/>
      </Contents>
    </Layout>
  )
};

export default JobdaIntroductionPage;
