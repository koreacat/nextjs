import WaterFill from "./waterFill";
import HeartFill from "./heartFill";
import CircleProgress from "./circleProgress";
import {useEffect, useState} from "react";
import {getInteger} from "../../util/getInteger";
import classnames from "classnames/bind";
import styles from "./components.module.scss";
import SpeechBubble from "./speechBubble";
import WordSlider from "./wordSlider";

const cx = classnames.bind(styles);

const Components = () => {
	const [averagePos, setAveragePos] = useState(getInteger(101));
	const [averageVal, setAverageVal] = useState(getInteger(101));
	const [averagePer, setAveragePer] = useState(getInteger(101));
	const [percent, setPercent] = useState(getInteger(101) * 2);

	useEffect(() => {
		const interval = setInterval(() => {
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
			<div className={cx('contentsWrap')}>
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
				<HeartFill
					title={'heartFill'}
					type={'VALUE'}
					average={averageVal}
				/>

			</div>
			<div className={cx('contentsWrap')}>
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
			<div className={cx('contentsWrap')} style={{background: '#6CDD83'}}>
				<SpeechBubble/>
			</div>
			<div className={cx('contentsWrap')} style={{background: '#6CDD83'}}>
				<WordSlider/>
			</div>
		</div>
	)
};

export default Components;
