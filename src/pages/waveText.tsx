import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import WaveText from "src/components/waveText";

const WaveTextPage = () => {

  return (
    <Layout>
      <Header/>
      <FixedHeader/>
      <Contents>
        <WaveText text={'heyyyyyyyyyyyy'}/>
      </Contents>
    </Layout>
  )
}

export default WaveTextPage;
