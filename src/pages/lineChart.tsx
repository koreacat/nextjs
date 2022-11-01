import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";
import Tooltip from "src/components/charts/lineChart/tooltip";
import Grid from "@components/grid";
import {ChartData, LineChartColorsType} from "../components/charts/lineChart/data";
import {useState} from "react";

type EmployeeType = 'ALL' | 'ENTRANT' | 'RETIREE';

const chartColosMap: Record<EmployeeType, LineChartColorsType> = {
  ALL: 'black',
  ENTRANT: 'green',
  RETIREE: 'blue',
};

const value1 = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0
];

const value2 = [
  55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95
];

const value3 = [
  55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95
];

const rowValue = [
  '21.01', '21.02', '21.03', '21.04',
  '21.05', '21.06', '21.07', '21.08',
  '21.09', '21.10', '21.11', '21.12',
]

const LineChartPage = () => {
  const [employeeType, setEmployeeType] = useState<EmployeeType>('ALL');
  const [yearsValue, setYearsValue] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(false);

  const getUnit = () => {
    const max = Math.max(...value1);
    const exponent = 10 ** (max.toString().length - 1);
    return Math.ceil((Math.ceil(max / exponent) * exponent + 3 * exponent) / 5);
  };

  const getColumns = () => {
    return new Array(6).fill(null).map((_, i) => `${i * getUnit()}명`);
  };

  const getRows = () => rowValue;

  const getChartData = (type: EmployeeType): ChartData[] => {
    switch (type) {
      case 'ALL':
        return value1.map((value, i) => {
          return {
            column: value / getUnit(),
            toolTip: <Tooltip value={`총 ${value}명`} type={chartColosMap[type]}/>,
          }
        });
      case 'ENTRANT':
        return value2.map((value, i) => {
          return {
            column: value / getUnit(),
            toolTip: <Tooltip value={`입사자: ${value}명`} type={chartColosMap[type]}/>,
          }
        });
      case 'RETIREE' :
        return value3.map((value, i) => {
          return {
            column: value / getUnit(),
            toolTip: <Tooltip value={`퇴사자: ${value}명`} type={chartColosMap[type]}/>,
          }
        });
    }
  };

  const handleClick = (type: EmployeeType) => {
    setEmployeeType(type);
    animation();
  }

  const handleChange = (e) => {
    setYearsValue(e.target.value);
    animation();
  }

  const animation = () => {
    setTrigger(false);
    setTimeout(() => setTrigger(true), 0)
  }

  return (
    <Layout>
      <Grid size={50}/>
      <Contents>

        <div style={{padding: '100px'}}>
          <div>
            <button onClick={() => handleClick('ALL')}>Black</button>
            <button onClick={() => handleClick('ENTRANT')} style={{marginLeft: '12px'}}>Green</button>
            <button onClick={() => handleClick('RETIREE')} style={{marginLeft: '12px'}}>Blue</button>
            <select value={yearsValue} onChange={handleChange} >
              <option value={'2020'}>2020</option>
              <option value={'2021'}>2021</option>
              <option value={'2022'}>2022</option>
            </select>
          </div>
          <div style={{width: '1400px', height: '484px', marginTop: '100px'}}>
            <LineChart
              colors={chartColosMap[employeeType]}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData(employeeType)}
              onIndex={11}
              viewCount={12}
              trigger={trigger}
            />
          </div>
        </div>
      </Contents>
    </Layout>

  )
};

export default LineChartPage;
