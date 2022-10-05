import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";

const LineChartPage = () => {
  return (
    <Layout>
      <Contents>
        <LineChart/>
        {/* <RoundedLineChart/> */}
      </Contents>
    </Layout>

  )
};

export default LineChartPage;
