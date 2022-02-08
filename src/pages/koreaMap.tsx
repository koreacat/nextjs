import Layout from "@components/layout";
import Contents from "@components/contents";
import KoreaMap from "src/components/koreaMap";
import {useState} from "react";

const KoreaMapPage = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <Layout>
      <Contents>
        <KoreaMap
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
        />
      </Contents>
    </Layout>
  )
};

export default KoreaMapPage;
