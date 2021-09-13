import Layout from "@components/layout";
import Contents from "@components/contents";
import RadarChart from "src/components/charts/radarChart";

const RadarChartPage = () => {

    const radarChartDataList = [
		{ title: '보상', value: 80, emphasized: true },
		{ title: '사회가치', value: 50, emphasized: false },
		{ title: '자존감', value: 70, emphasized: false },
		{ title: '성장성', value: 60, emphasized: false },
		{ title: '업무환경', value: 100, emphasized: true },
		{ title: '안정성', value: 90, emphasized: false },
	];

    return (
		<Layout>
            <Contents>
                <RadarChart radarChartDataList={radarChartDataList}/>
            </Contents>
        </Layout>
    )
};

export default RadarChartPage;
