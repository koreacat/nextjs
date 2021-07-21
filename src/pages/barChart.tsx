import Layout from "@components/layout";
import Contents from "@components/contents";
import { useState } from "react";
import BarChart from "src/components/charts/barChart";
import { barChartData } from "src/components/charts/barChart/data";
import styles from '../components/charts/charts.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const BarChartPage = () => {
    const [barChartsVisible, setBarChartsVisible] = useState(false);

    return (
		<Layout>
            <Contents>
                <div className={cx('wrap')}>
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
            </Contents>
        </Layout>
    )
};

export default BarChartPage;
