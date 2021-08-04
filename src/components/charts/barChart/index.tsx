import { useState } from "react";
import styles from './barChart.module.scss';
import classnames from 'classnames/bind';
import BarChartType01 from "./type01";
import { barChartData } from "./type01/data";
import BarChartType02 from "./type02";

const cx = classnames.bind(styles);

const BarChart = () => {
    const [barChartsVisible, setBarChartsVisible] = useState(false);
    const [barChartsVisible02, setBarChartsVisible02] = useState(false);

    return (
        <div className={cx('wrap')}>
            <div>
                <button
                    className={cx('barChartBtn', { 'open': barChartsVisible })}
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
                    <div style={{ padding: '15px' }}>
                        <BarChartType01
                            data={barChartData}
                            interactionTrigger={barChartsVisible}
                        />
                    </div>
                </div>
            </div>
            <div>
                <button
                    className={cx('barChartBtn')}
                    onClick={() => setBarChartsVisible02(!barChartsVisible02)}
                >확인하기</button>
                <BarChartType02 interactionTrigger={barChartsVisible02} />
            </div>
        </div>
    )
};

export default BarChart;