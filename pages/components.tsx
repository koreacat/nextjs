import WaterFill from "../src/components/waterFill";
import Count from "../src/components/count/index.";
import Layout from "../src/components/common/layout";
import {useEffect, useState} from "react";
import HeartFill from "../src/components/heartFill";

const Components = () => {
	const [averagePos, setAveragePos] = useState(Math.floor(Math.random() * 101));
	const [averageVal, setAverageVal] = useState(Math.floor(Math.random() * 101));
	const [averagePer, setAveragePer] = useState(Math.floor(Math.random() * 101));
	const [count, setCount] = useState(Math.floor(Math.random() * 100000));

	useEffect(() => {
		const interval = setInterval(() => {
			setAveragePos(Math.floor(Math.random() * 101));
			setAverageVal(Math.floor(Math.random() * 101));
			setAveragePer(Math.floor(Math.random() * 101));
			setCount(Math.floor(Math.random() * 100000));
		}, 7000);

		return (() => {
			clearInterval(interval);
		})
	}, []);

	return (
		<Layout>
			<Count count={count}/>
			<div style={{display: "flex"}}>
				<WaterFill
					title={'waterFill'}
					type={'POSITIVE'}
					average={averagePos}
				/>
				<WaterFill
					title={'waterFill'}
					type={'PERFORMANCE'}
					average={averagePer}
				/>
				<WaterFill
					title={'waterFill'}
					type={'VALUE'}
					average={averageVal}
				/>
			</div>
			<div style={{display: "flex"}}>
				<HeartFill
					title={'면접온도 지수'}
					type={'POSITIVE'}
					average={averagePos}
				/>
				<HeartFill
					title={'면접온도 지수'}
					type={'PERFORMANCE'}
					average={averagePer}
				/>
				<HeartFill
					title={'면접온도 지수'}
					type={'VALUE'}
					average={averageVal}
				/>
			</div>
		</Layout>
	)
};

export default Components;
