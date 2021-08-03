import classnames from "classnames/bind";
import styles from "./introduction.module.scss";
import OnOffCover from "./onOffCover";
import CountType02 from "../count/type02";
import SpeechBubble from "../components/speechBubble";
import WordSlider from "../components/wordSlider";

const cx = classnames.bind(styles);

const Introduction = () => {
	return (
		<div className={cx('wrap')}>
			<div className={cx('bannerWrap')}>

			</div>

			<div className={cx('trendsWrap')}>
				<CountType02 count={450} unitText={'사'}/>
				<CountType02 count={30} unitText={'만'}/>
				<CountType02 count={1} unitText={'위'}/>
			</div>
			<div className={cx('questionWrap')}>
				<SpeechBubble/>
				<WordSlider/>
			</div>
			<div className={cx('mySelfWrap')}>

			</div>
			<div className={cx('onOffCoverWrap')}>
				<OnOffCover/>
			</div>
			<div className={cx('processWrap')}>

			</div>

			<div className={cx('realYouWrap')}>
				<span className={cx('cover')}/>
				<div className={cx('contentsWrap')}>
					<span>THE REAL YOU</span>
					<span>열심히 응시한 AI역량검사 결과는 당신의 진짜 모습만 꾹꾹 담아 인사팀에 전달됩니다.</span>
				</div>
			</div>

			<div className={cx('guideWrap')}>

			</div>
			<div className={cx('lineGraphWrap')}>

			</div>
			<div className={cx('barGraphWrap')}>

			</div>
			<div className={cx('interviewWrap')}>

			</div>
			<div className={cx('cardBannerWrap')}>

			</div>
		</div>
	)
};

export default Introduction;
