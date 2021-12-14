import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Introduction from "../components/introduction";

const IntroductionPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <Introduction/>
      </Contents>
    </Layout>
  )
};

export default IntroductionPage;
