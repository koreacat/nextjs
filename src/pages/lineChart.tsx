import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart, { ChartData } from "src/components/charts/lineChart";

const LineChartPage = () => {
  const getColumns = () => ['0명', '100명', '200명', '300명', '400명', '500명', '600명', '700명'];
  
  const getRows = () => ['21.01', '21.02', '21.03', '21.04', '21.05', '21.06'];

  const getChartData = (): ChartData[] => {
    return [
      {
        column: 0,
      },
      {
        column: 1,
      },
      {
        column: 2,
      },
      {
        column: 3,
      },
      {
        column: 4,
      },
      {
        column: 5,
      },

    ];
  };

  return (
    <Layout>
      <Contents>
        <div style={{width: '600px', height: '340px'}}>
          <LineChart 
            rows={getRows()}
            columns={getColumns()}
            data={getChartData()}
            viewCount={6}
            onIndex={1}
          />
        </div>
        {/* <RoundedLineChart/> */}
      </Contents>
    </Layout>

  )
};

export default LineChartPage;
