import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import RadarChart from "src/components/charts/radarChart";
import {useEffect, useState} from "react";

const RadarChartPage = () => {
  let count = 0;
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count += 1;
      if(count > 100) clearInterval(interval);
      setNum(count);
    }, 10);

    return (() => {
      clearInterval(interval);
    })
  }, []);

  const radarChartDataList = [
    {title: '보상', values: [num / 1.4, 100], emphasized: false},
    {title: '사회가치', values: [num / 1.3, 100], emphasized: true},
    {title: '자존감', values: [num / 1.8, 90], emphasized: false},
    {title: '성장성', values: [num / 1.5, 90], emphasized: false},
    {title: '업무환경', values: [num / 1.2, 70], emphasized: false},
    {title: '안정성', values: [num / 1.1, 70], emphasized: false},
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
