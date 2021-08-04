import classnames from "classnames/bind";
import styles from "./introduction.module.scss";
import OnOffCover from "./onOffCover";
import RealYou from "./realYou";
import Trands from "./trends";
import Question from "./question";
import ResultProcess from "./resultProcess";
import Fit from "./fit";
import Guide from "./guide";

const cx = classnames.bind(styles);

const Introduction = () => {
	return (
		<div className={cx('wrap')}>
			<div className={cx('bannerWrap', 'contents')}>

			</div>

			<div className={cx('trendsWrap', 'contents')}>
				<Trands/>
			</div>

			<div className={cx('questionWrap', 'contents')}>
				<Question/>
			</div>

			<div className={cx('mySelfWrap', 'contents')}>

			</div>
			
			<div className={cx('onOffCoverWrap', 'contents')}>
				<OnOffCover/>
			</div>

			<div className={cx('processWrap', 'contents')}>
				AI역량검사, 어떤 과정으로 진행될까요? 응시 프로세스를 소개합니다.
			</div>

			<div className={cx('realYouWrap', 'contents')}>
				<RealYou/>
			</div>

			<div className={cx('guideWrap', 'contents')}>
				<Guide/>
			</div>

			<div className={cx('resultProcessWrap', 'contents')}>
				<ResultProcess/>
			</div>

			<div className={cx('fitWrap', 'contents')}>
				<Fit/>
			</div>

			<div className={cx('interviewWrap', 'contents')}>
				먼저 경험한 선배들이 알려주는 AI역량검사 꿀팁. 지금 바로 확인하세요.
			</div>

			<div className={cx('cardBannerWrap', 'contents')}>
				남들과는 다르게, 누구보다 빠르게! 공식 개발사와 함께라면 AI역량검사 준비 끝.
			</div>
		</div>
	)
};

export default Introduction;
