import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";

const LineChartPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <LineChart/>
      </Contents>
    </Layout>

  )
};

export default LineChartPage;
