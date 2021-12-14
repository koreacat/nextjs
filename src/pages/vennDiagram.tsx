import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import VennDiagram from "src/components/charts/vennDiagram";

const VennDiagramPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <VennDiagram/>
      </Contents>
    </Layout>
  )
};

export default VennDiagramPage;
