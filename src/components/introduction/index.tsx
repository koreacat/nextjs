import classnames from "classnames/bind";
import styles from "./introduction.module.scss";
import OnOffCover from "./onOffCover";
import RealYou from "./realYou";
import Trands from "./trends";
import Question from "./question";
import ResultProcess from "./resultProcess";
import Fit from "./fit";
import Guide from "./guide";
import Interview from "./interview";
import CardBanner from "./cardBanner";
import Process from "./process";
import Banner from "./banner";
import Myself from "./myself";

const cx = classnames.bind(styles);

const Introduction = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('bannerWrap', 'contents')}>
        <Banner/>
      </div>

      <div className={cx('trendsWrap', 'contents')}>
        <Trands/>
      </div>

      <div className={cx('questionWrap', 'contents')}>
        <Question/>
      </div>

      <div className={cx('mySelfWrap', 'contents')}>
        <Myself/>
      </div>

      <div className={cx('onOffCoverWrap', 'contents')}>
        <OnOffCover/>
      </div>

      <div className={cx('processWrap', 'contents')}>
        <Process/>
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
        <Interview/>
      </div>

      <div className={cx('cardBannerWrap', 'contents')}>
        <CardBanner/>
      </div>
    </div>
  )
};

export default Introduction;
