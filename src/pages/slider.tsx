import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Sliders from "../components/slider";
import CircleSlider from "@components/circleSlider";

const SliderPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <Sliders/>
        <CircleSlider/>
      </Contents>
    </Layout>
  )
};

export default SliderPage;
