import Layout from "@components/layout";
import Contents from "@components/contents";
import StickyScroll from "../components/stickyScroll";
import ScrollTop from "../components/stickyScroll/scrollTop";

const StickyScrollPage = () => {
  return (
    <Layout>
      <Contents>
        <StickyScroll/>
        <ScrollTop/>
      </Contents>
    </Layout>
  )
};

export default StickyScrollPage;
