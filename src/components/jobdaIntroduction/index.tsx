import classnames from "classnames/bind";
import { useRef } from "react";
import styles from "./jobdaIntroduction.module.scss";
import { useScrollAnimation } from "./scrollAnimation";
import { initData, animationData } from "./data";

const cx = classnames.bind(styles);

const JobdaIntroduction = () => {
	const $refs = useRef<HTMLElement[]>([]);

	const setRef = (name: string, el: HTMLElement) => $refs.current[name] = el;

	useScrollAnimation({$refs, initData, animationData, cx});

	return (
		<div className={cx('container')} style={{height: '10000px'}}>
			<div className={cx('sticky')}>
				<div className={cx('slideContainer')}>

					<div className={cx("title")} ref={el => setRef('title', el)}>
						sokodomo - 회전목마 (Feat. Zion.T, 원슈타인)
					</div>

					<div className={cx("slide")} ref={el => setRef('sl1', el)}>
						<div className={cx("bigText")}>
							<p>내가 슬플 때마다</p>
						</div>
					</div>

					<div className={cx("slide")} ref={el => setRef('sl2', el)}>
						<div className={cx("bigText")}>
							<p>이 노래가 찾아와</p>
						</div>
					</div>

					<div className={cx("slide")} ref={el => setRef('sl3', el)}>
						<div className={cx("bigText")}>
							<p>세상이 둥근 것처럼</p>
							<p>우린 동글동글</p>
						</div>
					</div>

					<div className={cx("slide")} ref={el => setRef('sl4', el)}>
						<div className={cx("bigText")}>
							<p>인생은 회전목마</p>
						</div>
					</div>

					<div className={cx("slide")} ref={el => setRef('sl5', el)}>
						<div className={cx("bigText")}>
							<p>우린 매일 달려가</p>
						</div>
					</div>

					<div className={cx("slide")} ref={el => setRef('sl6', el)}>
						<div className={cx("bigText")}>
							<p>언제쯤 끝나 난 잘 몰라</p>
						</div>
					</div>


				</div>
			</div>
		</div>
	)
};

export default JobdaIntroduction;
