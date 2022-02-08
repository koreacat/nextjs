import Layout from "@components/layout";
import Contents from "@components/contents";
import Sliders from "../components/slider";
import CircleSlider from "@components/circleSlider";

const SliderPage = () => {
  return (
    <Layout>
      <Contents>
        <Sliders/>
        <CircleSlider/>
      </Contents>
    </Layout>
  )
};

export default SliderPage;
