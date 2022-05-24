import Contents from "@components/contents";
import Layout from "@components/layout";
import BubbleChar from "src/components/charts/bubbleChart";
import { getInteger } from "src/util/getInteger";

const ToolTip = ({ title }: { title: string }) => {
  return (
    <div style={
      {
        background: '#fff',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: 700,

      }
    }>
      {title}
    </div>
  )
}

const BubbleChartPage = () => {

  const getChartData = () => {
    const x = 100 + getInteger(500);
    const y = -x + 400 + getInteger(300);
    const r = 5 + getInteger(40);
    return {
      point: {
        x: x,
        y: y,
      },
      r: r,
      fill: `#${Math.round(Math.random() * 0xFFFFFF).toString(16)}`,
      toolTip: <ToolTip title={`x: ${x} y: ${y} r: ${r}`}/>,
      title: '',
    }
  }

  const getChartDataList = () => {
    return new Array(30).fill({}).map(() => getChartData());
  }

  return (
    <Layout>
      <Contents>
        <BubbleChar
          canvasWidth={700}
          canvasHeight={500}
          chartDataList={getChartDataList()}
        />
      </Contents>
    </Layout>
  )
}

export default BubbleChartPage;