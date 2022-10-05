import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart, { ChartData } from "src/components/charts/lineChart";
import Tooltip from "src/components/charts/lineChart/tooltip";

const LineChartPage = () => {
  const getColumns = () => ['0명', '100명', '200명', '300명', '400명', '500명'];
  
  const type = 'black';

  const getRows = () => [
    '21.01', '21.02', '21.03', '21.04', 
    '21.05', '21.06', '21.07', '21.08', 
    '21.09', '21.10', '21.11', '21.12',
  ];

  const getChartData = (): ChartData[] => {
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
      <Contents>
        <div style={{padding: '50px'}}>
          <div style={{width: '1071px', height: '484px'}}>
            <LineChart 
              type={type}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData()}
              onIndex={11}
              viewCount={12}
            />
          </div>
          <div style={{width: '334px', height: '205px'}}>
          <LineChart 
              rows={getRows()}
              columns={getColumns()}
              data={getChartData()}
              viewCount={12}
            />
          </div>
        </div>
      </Contents>
    </Layout>

  )
};

export default LineChartPage;
