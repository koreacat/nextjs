import styles from './lineChart.module.scss';
import classnames from 'classnames/bind';
import { useState } from 'react';
import { getInteger } from 'src/util/getInteger';

const cx = classnames.bind(styles);

const LineChart = () => {
    const [lineData, setLineData] = useState<Array<string>>(["M -10 154 Q -100 299 -75 200 T 0 161 T 100 153 T 200 151 T 300 156 T 426 158 L 426 370 L -10 370 Z"]);
    const [lineData02, setLineData02] = useState('M -10 234 Q -100 174 -75 200 T -10 239 T 100 231 T 200 236 T 300 239 T 426 230');
    const [lineData03, setLineData03] = useState('M -10 240 Q -100 162 -75 200 T -10 245 T 100 241 T 200 242 T 300 249 T 426 245');
    const [lineData04, setLineData04] = useState('M -10 73 Q -100 378 -75 200 T -10 71 T 100 78 T 200 71 T 300 79 T 426 71');

    const getPath = (offset: number, lange: number, ran: number) => {
        return `
        M -10 ${getInteger(10) + offset}
        Q -100 ${getInteger(ran) + lange}, -75 200 
        T -10 ${getInteger(10) + offset}  
        T 100 ${getInteger(10) + offset}  
        T 200 ${getInteger(10) + offset}  
        T 300 ${getInteger(10) + offset}  
        T 426 ${getInteger(10) + offset}`;
    }

    const onClick = () => {
        const startPoint = `M -10 ${getInteger(20) + 150}`;
        const endPoint = `L 426 370 L -10 370 Z`; 
        const data = [];
        data.push(startPoint);
        data.push(`
            Q -100 ${getInteger(200) + 100}, -75 200 
            T 0 ${getInteger(20) + 150}  
            T 100 ${getInteger(20) + 150}  
            T 200 ${getInteger(20) + 150}  
            T 300 ${getInteger(20) + 150}  
            T 426 ${getInteger(20) + 150}  
            `);
        data.push(endPoint);
        setLineData(data);
        setLineData02(getPath(230, 170, 5));
        setLineData03(getPath(240, 160, 5));
        setLineData04(getPath(70, 300, 100));
    };

    return (
        <div className={cx('wrap')} onClick={onClick}>
            <svg width="416" height="360">
                <path className={cx('path')} stroke={'#6CDD83'} strokeWidth={5} fill="url('#myGradient')" d={lineData.join('')}/>
                <path className={cx('path')} stroke={'#6CDD83'} strokeWidth={1} fill="transparent" d={lineData02}/>
                <path className={cx('path')} stroke={'#6CDD83'} strokeWidth={1} fill="transparent" d={lineData03}/>
                <path className={cx('path')} stroke={'#fef8b1'} strokeWidth={5} fill="transparent" d={lineData04}/>
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#6CDD8399"/>
                        <stop offset="100%" stopColor="#effdf3" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
};

export default LineChart;