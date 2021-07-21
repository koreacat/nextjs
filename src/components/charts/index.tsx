import styles from './charts.module.scss';
import classnames from 'classnames/bind';
import BarChart from './barChart';
import RaderChart from './raderChart';
import DotChart from './dotChart';
import VennDiagram from './vennDiagram';
import { barChartData } from './barChart/data';
import { useState } from 'react';

const cx = classnames.bind(styles);

const Charts = () => {
    const [barChartsVisible, setBarChartsVisible] = useState(false);

    return (
        <div className={cx('wrap')}>
            <RaderChart/>

            <div>
                <button
                    className={cx('barChartBtn', {'open': barChartsVisible})}
                    onClick={() => setBarChartsVisible(!barChartsVisible)}
                >
                    {barChartsVisible ? '접어두기' : '확인하기'}
                </button>
                <div 
                    style={{
                        overflow: 'hidden',
                        height: !barChartsVisible ? '0px' : '600px', 
                        transition: barChartsVisible && '.5s all ease-in-out'
                    }}
                >   
                    <div style={{padding: '15px'}}>
                         <BarChart 
                            data={barChartData}
                            interactionTrigger={barChartsVisible}
                        />
                    </div>
                 </div>
            </div>
            
            <VennDiagram/>
            <DotChart/>
        </div>
    )
}

export default Charts; 
