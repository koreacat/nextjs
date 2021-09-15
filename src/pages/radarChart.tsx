import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import RadarChart from "src/components/charts/radarChart";

const RadarChartPage = () => {

    const radarChartDataList = [
		{ title: '보상', values: [80, 100], emphasized: false },
		{ title: '사회가치', values: [50, 100], emphasized: true },
		{ title: '자존감', values: [70, 90], emphasized: false },
		{ title: '성장성', values: [60, 90], emphasized: false },
		{ title: '업무환경', values: [100, 70], emphasized: false },
		{ title: '안정성', values: [90, 70], emphasized: false },
	];

    return (
		<Layout>
			<Header/>
            <FixedHeader/>
            <Contents>
                <RadarChart 
					radarChartDataList={radarChartDataList} 
					color={'SKY'}
					polygonColors={['GREEN', 'SKY']}
					polygonCount={2}
				/>
            </Contents>
        </Layout>
    )
};

export default RadarChartPage;
