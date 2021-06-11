import WaterFill from "../components/waterFill";
import Count from "../components/count/index.";
import Layout from "../components/common/layout";
import {useEffect, useState} from "react";

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
			<div style={{display: "flex"}}>
				<WaterFill
					title={'waterFill'}
					type={'POSITIVE'}
					average={averagePos}
				/>
				<WaterFill
					title={'waterFill'}
					type={'VALUE'}
					average={averageVal}
				/>
				<WaterFill
					title={'waterFill'}
					type={'PERFORMANCE'}
					average={averagePer}
				/>
			</div>
			<Count count={count}/>
		</Layout>
	)
};

export default Components;
