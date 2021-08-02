import styles from './barChart.module.scss';
import classnames from 'classnames/bind';
import { ReactElement, useEffect, useState } from 'react';

const cx = classnames.bind(styles);

export interface IBarChartData {
    title: string | ReactElement;
    value: number;
    emphasized?: boolean;
    interactionTrigger?: INTERACTION_TRIGGER;
}

const Bar = ({title, value, emphasized, interactionTrigger}: IBarChartData) => {
    const [count, setCount] = useState(20);
    let timeout;
    useEffect(() => {
        interactionTrigger ?
        timeout = setTimeout(() => {setCount(20 + value * 5)}, 600) : setCount(20);

        return (() => {
            clearTimeout(timeout);
        })
    }, [interactionTrigger, value]);

    return (
        <div className={cx('bar', {'emphasized': emphasized})}>
            <span className={cx('title')}>{title}</span>
            <span className={cx('value')} style={{width: count, transition: interactionTrigger && 'all .7s ease-in-out'}}/>
        </div>
    )
};

type INTERACTION_TRIGGER = true | false;

interface BarChart {
    data?: Array<IBarChartData>;
    interactionTrigger?: INTERACTION_TRIGGER;
}

const BarChart = ({data, interactionTrigger}: BarChart) => {
    const list = data?.map(({title, value, emphasized}, index) => {
        return (
            <Bar
                key={index}
                title={title ? title : ''}
                value={value ? (value > 100 ? 100 : (value < 0 ? 0 : value)) : 0}
                emphasized={emphasized}
                interactionTrigger={interactionTrigger}
            />
        )
    });

    return (
        <div className={cx('wrap')}>
            {list}
        </div>
    )
};

export default BarChart;
