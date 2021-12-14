import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Components from "../components/components";

const ComponentsPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <Components/>
      </Contents>
    </Layout>
  )
};

export default ComponentsPage;
