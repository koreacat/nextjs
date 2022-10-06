import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";
import Tooltip from "src/components/charts/lineChart/tooltip";
import Grid from "@components/grid";
import {ChartData} from "../components/charts/lineChart/data";

const LineChartPage = () => {
  const getColumns = () => ['0명', '100명', '200명', '300명', '400명', '500명'];

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
        toolTip: <Tooltip value={`직원수: ${value}명`} type={type}/>,
      }
    })
  };

  return (
    <Layout>
      {/*<Grid size={50}/>*/}
      <Contents>
        <div style={{padding: '100px'}}>
          <div style={{width: '1400px', height: '484px'}}>
            <LineChart
              type={'black'}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData('black')}
              onIndex={11}
              viewCount={12}
            />
          </div>
          <div style={{width: '1100px', height: '384px', marginTop: '24px'}}>
            <LineChart
              type={'green'}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData('green')}
              onIndex={5}
              viewCount={12}
            />
          </div>
          <div style={{width: '800px', height: '284px', marginTop: '24px', backgroundColor:'#fefbf9'}}>
            <LineChart
              type={'blue'}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData('blue')}
              onIndex={0}
              viewCount={12}
            />
          </div>

          <div style={{display: 'flex', marginTop: '24px'}}>
            <div style={{width: '340px', height: '205px', backgroundColor:'#fefbf9'}}>
              <LineChart
                type={'black'}
                rows={getMobileRows()}
                columns={getColumns()}
                data={getChartData('black')}
                onIndex={2}
                viewCount={12}
              />
            </div>
            <div style={{width: '340px', height: '205px', marginLeft: '24px', backgroundColor:'#fefbf9'}}>
              <LineChart
                type={'green'}
                rows={getMobileRows()}
                columns={getColumns()}
                data={getChartData('green')}
                onIndex={3}
                viewCount={12}
              />
            </div>
            <div style={{width: '340px', height: '205px', marginLeft: '24px', backgroundColor:'#fefbf9'}}>
              <LineChart
                type={'blue'}
                rows={getMobileRows()}
                columns={getColumns()}
                data={getChartData('blue')}
                onIndex={4}
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
