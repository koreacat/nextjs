import Contents from "@components/contents";
import Footer from "@components/footer";
import Layout from "@components/layout";
import BubbleChar from "src/components/charts/bubbleChart";

const BubbleChartPage = () => {
  return (
    <Layout>
      <Contents>
        <BubbleChar/>
      </Contents>
      <Footer />
    </Layout>
  )
}

export default BubbleChartPage;