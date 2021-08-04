import Layout from "@components/layout";
import Contents from "@components/contents";
import BarChart from "src/components/charts/barChart";

const BarChartPage = () => {
    return (
		<Layout>
            <Contents>
                <BarChart/>
            </Contents>
        </Layout>
    )
};

export default BarChartPage;
