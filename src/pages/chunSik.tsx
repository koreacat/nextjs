import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import ChunSik from "src/components/chunSik";

const ChunSikPage = () => {
  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <ChunSik/>
      </Contents>
    </Layout>
  )
}

export default ChunSikPage;