import Layout from "@components/layout";
import Contents from "@components/contents";
import RaderChart from "src/components/charts/raderChart";

const RaderChartPage = () => {
    return (
		<Layout>
            <Contents>
                <RaderChart/>
            </Contents>
        </Layout>
    )
};

export default RaderChartPage;
