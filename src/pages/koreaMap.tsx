import Contents from "@components/contents";
import Layout from "@components/layout";
import { useState } from "react";
import KoreaMap from "src/components/koreaMap";

const KoreaMapPage = () => {
	const [selectedLocations, setSelectedLocations] = useState([]);

	return (
		<Layout>
			<Contents>
				<KoreaMap
					selectedLocations={selectedLocations}
					setSelectedLocations={setSelectedLocations}
				/>
				<KoreaMap
					selectedLocations={selectedLocations}
					setSelectedLocations={setSelectedLocations}
				/>
			</Contents>
		</Layout>
	)
};

export default KoreaMapPage;
