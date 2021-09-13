import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import DotChart from "../components/charts/dotChart";

const DotChartPage = () => {
	return (
		<Layout>
			<Header/>
            <FixedHeader/>
			<Contents>
				<DotChart/>
			</Contents>
		</Layout>
	)
};

export default DotChartPage;
