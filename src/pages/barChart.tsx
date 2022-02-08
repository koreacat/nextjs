import Layout from "@components/layout";
import Contents from "@components/contents";
import BarChart from "src/components/charts/barChart";
import Footer from "@components/footer";

const BarChartPage = () => {
  return (
    <Layout>
      <Contents>
        <BarChart/>
      </Contents>
      <Footer/>
    </Layout>
  )
};

export default BarChartPage;
