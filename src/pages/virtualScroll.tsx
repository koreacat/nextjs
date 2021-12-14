import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import VirtualScroll from "@components/virtualScroll";

const VirtualScrollPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <VirtualScroll/>
      </Contents>
    </Layout>
  )
};

export default VirtualScrollPage;
