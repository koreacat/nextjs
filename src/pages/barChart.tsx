import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import BarChart from "src/components/charts/barChart";
import Footer from "@components/footer";

const BarChartPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <BarChart/>
      </Contents>
      <Footer/>
    </Layout>
  )
};

export default BarChartPage;
