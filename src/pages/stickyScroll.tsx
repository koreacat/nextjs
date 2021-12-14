import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Banner from "../components/stickyScroll/banner";
import StickyScroll from "../components/stickyScroll";
import ScrollTop from "../components/stickyScroll/scrollTop";

const StickyScrollPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <Banner/>
        <StickyScroll/>
        <ScrollTop/>
      </Contents>
    </Layout>
  )
};

export default StickyScrollPage;
