import Count from "./count/index.";
import WaterFill from "./waterFill";
import HeartFill from "./heartFill";
import CircleProgress from "./circleProgress";
import {useEffect, useState} from "react";
import {getInteger} from "../../util/getInteger";

const Components = () => {
	const [count, setCount] = useState(getInteger(100000));
	const [averagePos, setAveragePos] = useState(getInteger(101));
	const [averageVal, setAverageVal] = useState(getInteger(101));
	const [averagePer, setAveragePer] = useState(getInteger(101));
	const [percent, setPercent] = useState(getInteger(101) * 2);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(getInteger(100000));
			setAveragePos(getInteger(101));
			setAverageVal(getInteger(101));
			setAveragePer(getInteger(101));
			setPercent(getInteger(101) * 2);
		}, 7000);

		return (() => {
			clearInterval(interval);
		})
	}, []);

	return (
		<div>
			<div style={{display: "flex"}}>
				<Count
					maxLength={1}
					count={count}
				/>
				<Count
					maxLength={3}
					count={count}
				/>
				<Count
					maxLength={5}
					count={count}
				/>
			</div>
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
					title={'heartFill'}
					type={'POSITIVE'}
					average={averagePos}
				/>
				<HeartFill
					title={'heartFill'}
					type={'PERFORMANCE'}
					average={averagePer}
				/>
				<HeartFill
					title={'heartFill'}
					type={'VALUE'}
					average={averageVal}
				/>
			</div>
			<div style={{display: "flex"}}>
				<CircleProgress
					r={31.5}
					title={'쉬움'}
					percent={percent / 5}
					colorType={'YELLOW'}
				/>
				<CircleProgress
					r={37.8}
					title={'다소 쉬움'}
					percent={percent / 4}
					colorType={'LIME'}
				/>
				<CircleProgress
					r={44.1}
					title={'보통'}
					percent={percent / 3}
					colorType={'GREEN'}
				/>
				<CircleProgress
					r={50.4}
					title={'다소 어려움'}
					percent={percent / 2}
					colorType={'SKY'}
				/>
				<CircleProgress
					r={56.7}
					title={'어려움'}
					percent={percent}
					colorType={'BLUE'}
				/>
			</div>
		</div>
	)
};

export default Components;
