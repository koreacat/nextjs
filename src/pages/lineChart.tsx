import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";
import Tooltip from "src/components/charts/lineChart/tooltip";
import Grid from "@components/grid";
import {ChartData} from "../components/charts/lineChart/data";
import TooltipSmall from "src/components/charts/lineChart/tooltipSmall";

const LineChartPage = () => {
  const getColumns = () => ['0명', '100명', '200명', '300명', '400명', '500명', '600명'];

  const getRows = () => [
    '21.01', '21.02', '21.03', '21.04',
    '21.05', '21.06', '21.07', '21.08',
    '21.09', '21.10', '21.11', '21.12',
  ];

  const getMobileRows = () => [
    '', '', '21.03', '',
    '', '21.06', '', '',
    '21.09', '', '', '21.12',
  ];

  const getChartData = (type): ChartData[] => {
    return [
      190, 200, 210, 220, 260, 280, 300, 310, 320, 330, 380, 403
    ].map((value, i) => {
      return {
        column: value / 100,
        toolTip: <Tooltip value={`총 ${value}명`} type={type}/>,
      }
    })
  };

  const getChartData2 = (type): ChartData[] => {
    return [
      55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95
    ].map((value, i) => {
      return {
        column: value / 100,
        toolTip: <Tooltip value={`입사자: ${value}명`} type={type}/>,
      }
    })
  };

  const getChartData3 = (type): ChartData[] => {
    return [
      55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95
    ].map((value, i) => {
      return {
        column: value / 100,
        toolTip: <Tooltip value={`퇴사자: ${value}명`} type={type}/>,
      }
    })
  };

  const getChartDataSmall = (type): ChartData[] => {
    return [
      190, 200, 210, 220, 260, 280, 300, 310, 320, 330, 380, 403
    ].map((value, i) => {
      return {
        column: value / 100,
        toolTip: <TooltipSmall value={`총 ${value}명`} type={type}/>,
      }
    })
  };

  return (
    <Layout>
      <Grid size={50}/>
      <Contents>
        <div style={{padding: '100px'}}>
          <div style={{width: '1400px', height: '484px'}}>
            <LineChart
              colors={'black'}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData('black')}
              onIndex={11}
              viewCount={12}
            />
          </div>
          {/* 
          <div style={{width: '1100px', height: '384px', marginTop: '24px'}}>
            <LineChart
              colors={'green'}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData2('green')}
              onIndex={5}
              viewCount={12}
            />
          </div>
           

          <div style={{width: '800px', height: '284px', marginTop: '24px'}}>
            <LineChart
              colors={'blue'}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData3('blue')}
              onIndex={0}
              viewCount={12}
            />
          </div>
          */}
          <div style={{marginTop: '48px'}}>
            <div style={{width: '340px', height: '205px'}}>
              <LineChart
                colors={'black'}
                type={'small'}
                rows={getMobileRows()}
                columns={getColumns()}
                data={getChartDataSmall('black')}
                onIndex={0}
                viewCount={12}
              />
            </div>
            <div style={{width: '340px', height: '205px', marginLeft: '24px'}}>
              <LineChart
                colors={'green'}
                type={'small'}
                rows={getMobileRows()}
                columns={getColumns()}
                data={getChartDataSmall('green')}
                onIndex={3}
                viewCount={12}
              />
            </div>
            <div style={{width: '340px', height: '205px', marginLeft: '24px'}}>
              <LineChart
                colors={'blue'}
                type={'small'}
                rows={getMobileRows()}
                columns={getColumns()}
                data={getChartDataSmall('blue')}
                onIndex={11}
                viewCount={12}
              />
            </div>
          </div>
        </div>
      </Contents>
    </Layout>

  )
};

export default LineChartPage;
