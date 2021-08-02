import classnames from "classnames/bind";
import styles from "./wordSlider.module.scss";

const cx = classnames.bind(styles);

const data = [
	'“서류만 보고 나를 다 알 수 있을까? ”',
	'“ 인적성 잘 푸는 것과 일 잘하는 것은 어떤 연관성이 있을까? ”',
	'“ 면접관마다 평가가 주관적인 것은 아닐까? ”',
	'“서류만 보고 나를 다 알 수 있을까? ”',
];

const List = () => {

	const list = data.map((data) => {
		return <li className={cx('word')}>{data}</li>;
	});

	return (
		<ul className={cx('words')}>
			{list}
		</ul>
	)
};

const WordSlider = () => {
	return (
		<div className={cx('wrap')}>
			<div className={cx('slider')}>
				<List/>
			</div>
		</div>
	)
};

export default WordSlider;
