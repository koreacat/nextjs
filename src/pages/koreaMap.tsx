import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import KoreaMap from "src/components/koreaMap";
import { useState } from "react";

const KoreaMapPage = () => {
	const [selectedLocations, setSelectedLocations] = useState([]);

	return (
		<Layout>
			<Header/>
            <FixedHeader/>
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
