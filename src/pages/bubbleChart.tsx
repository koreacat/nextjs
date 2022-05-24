import Contents from "@components/contents";
import Footer from "@components/footer";
import Layout from "@components/layout";
import BubbleChar from "src/components/charts/bubbleChart";

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
  return (
    <Layout>
      <Contents>
        <BubbleChar
          canvasWidth={1120}
          canvasHeight={500}
          chartDataList={[
            {
              point: { x: 260, y: 450 }, r: 20, fill: '#FFD400', title: '111',
              toolTip: <ToolTip title={'x: 260, y: 450'} />
            },
            {
              point: { x: 360, y: 400 }, r: 10, fill: '#00A963', title: '111',
              toolTip: <ToolTip title={'x: 360, y: 400'} />
            },
            {
              point: { x: 460, y: 300 }, r: 15, fill: '#FB3738', title: '111',
              toolTip: <ToolTip title={'x: 460, y: 300'} />

            },
            {
              point: { x: 560, y: 250 }, r: 40, fill: '#0083A5', title: '111',
              toolTip: <ToolTip title={'x: 560, y: 250'} />

            },
            {
              point: { x: 660, y: 200 }, r: 32, fill: '#F69453', title: '222',
              toolTip: <ToolTip title={'x: 660, y: 200'} />

            },
            {
              point: { x: 760, y: 170 }, r: 16, fill: '#FFD400', title: '222',
              toolTip: <ToolTip title={'x: 760, y: 170'} />

            },
            {
              point: { x: 860, y: 175 }, r: 22, fill: '#00A963', title: '222',
              toolTip: <ToolTip title={'x: 860, y: 175'} />

            },
            {
              point: { x: 960, y: 100 }, r: 31, fill: '#0083A5', title: '222',
              toolTip: <ToolTip title={'x: 960, y: 100'} />

            },
          ]}
        />
        <BubbleChar
          canvasWidth={700}
          canvasHeight={500}
          chartDataList={[
            {
              point: { x: 240, y: 350 }, r: 40, fill: '#CCC', title: '111',
              toolTip: <ToolTip title={'x: 240, y: 350'} />
            },
            {
              point: { x: 360, y: 300 }, r: 10, fill: '#CCC', title: '111',
              toolTip: <ToolTip title={'x: 360, y: 300'} />
            },
            {
              point: { x: 460, y: 200 }, r: 45, fill: '#00A963', title: '111',
              toolTip: <ToolTip title={'x: 460, y: 200'} />
            },
          ]}
        />
      </Contents>
    </Layout>
  )
}

export default BubbleChartPage;