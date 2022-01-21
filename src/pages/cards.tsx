import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Cards from "src/components/cards";

const CardsPage = () => {
    return (
        <Layout>
          <Header/>
          <FixedHeader/>
          <Contents>
            <Cards/>
          </Contents>
        </Layout>
      )
}

export default CardsPage;