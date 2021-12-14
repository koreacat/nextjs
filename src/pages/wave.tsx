import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Wave from "src/components/effect/wave";

const WavePage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <Wave/>
      </Contents>
    </Layout>
  )
};

export default WavePage;
