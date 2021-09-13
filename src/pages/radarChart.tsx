import Layout from "@components/layout";
import Contents from "@components/contents";
import RadarChart from "src/components/charts/radarChart";

const RadarChartPage = () => {
    return (
		<Layout>
            <Contents>
                <RadarChart/>
            </Contents>
        </Layout>
    )
};

export default RadarChartPage;
