import Layout from "@components/layout";
import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";
import Tooltip from "src/components/charts/lineChart/tooltip";
import Grid from "@components/grid";
import {ChartData, LineChartColorsType} from "../components/charts/lineChart/data";
import {useEffect, useState} from "react";

type EmployeeType = 'ALL' | 'ENTRANT' | 'RETIREE';

const chartColosMap: Record<EmployeeType, LineChartColorsType> = {
  ALL: 'black',
  ENTRANT: 'green',
  RETIREE: 'blue',
};

const res = {
  ALL: [2, 3, 4, 5, 4, 1, 2, 3, 4, 4, 3, 7],
  ENTRANT: [55, 60, 65, 70, 55, 60, 65, 70],
  RETIREE: [155, 560, 635, 230, 275, 780, 850, 580, 580, 851, 690, 935],
}

const rowValue =  {
  ALL: [
    '21.01', '21.02', '21.03', '21.04',
    '21.05', '21.06', '21.07', '21.08',
    '21.09', '21.10', '21.11', '21.12',
  ],
  ENTRANT: [
    '21.01', '21.02', '21.03', '21.04',
  ],
  RETIREE: [
    '21.01', '21.02', '21.03', '21.04',
    '21.05', '21.06', '21.07', '21.08',
    '21.09', '21.10', '21.11', '21.12',
  ],
}



const LineChartPage = () => {
  const [employeeType, setEmployeeType] = useState<EmployeeType>('ALL');
  const [yearsValue, setYearsValue] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(true);
  const [data, setData] = useState([]);

  const getUnit = () => {
    const max = Math.max(...data);
    const exponent = 10 ** (max.toString().length - 1);
    return Math.ceil((Math.ceil(max / exponent) * exponent + 3 * exponent) / 5);
  };

  const getColumns = () => {
    return new Array(6).fill(null).map((_, i) => `${i * getUnit()}명`);
  };

  const getRows = () => rowValue[employeeType];

  const getChartData = (type: EmployeeType): ChartData[] => {
    switch (type) {
      case 'ALL':
        return data.map((value, i) => {
          return {
            column: value / getUnit(),
            toolTip: <Tooltip value={`총 ${value}명`} type={chartColosMap[type]}/>,
          }
        });
      case 'ENTRANT':
        return data.map((value, i) => {
          return {
            column: value / getUnit(),
            toolTip: <Tooltip value={`입사자: ${value}명`} type={chartColosMap[type]}/>,
          }
        });
      case 'RETIREE' :
        return data.map((value, i) => {
          return {
            column: value / getUnit(),
            toolTip: <Tooltip value={`퇴사자: ${value}명`} type={chartColosMap[type]}/>,
          }
        });
    }
  };

  const handleClick = (type: EmployeeType) => {
    setData(res[type]);
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

  useEffect(() => {
    setData(res[employeeType]);
  }, [])

  return (
    <Layout>
      <Grid size={50}/>
      <Contents>

        <div style={{padding: '100px'}}>
          <div>
            <button onClick={() => handleClick('ALL')}>Black</button>
            <button onClick={() => handleClick('ENTRANT')} style={{marginLeft: '12px'}}>Green</button>
            <button onClick={() => handleClick('RETIREE')} style={{marginLeft: '12px'}}>Blue</button>
            {/*<select value={yearsValue} onChange={handleChange}>*/}
            {/*  <option value={'2020'}>2020</option>*/}
            {/*  <option value={'2021'}>2021</option>*/}
            {/*  <option value={'2022'}>2022</option>*/}
            {/*</select>*/}
          </div>
          <div style={{width: '1400px', height: '484px', marginTop: '100px'}}>
            <LineChart
              colors={chartColosMap[employeeType]}
              rows={getRows()}
              columns={getColumns()}
              data={getChartData(employeeType)}
              onIndex={data.length - 1}
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
