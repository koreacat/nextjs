import classnames from "classnames/bind";
import styles from "./aiIntroduce.module.scss";
import OnOffCover from "./onOffCover";
import RealYou from "./realYou";
import Trands from "./trends";
import Question from "./question";
import ResultProcess from "./resultProcess";
import Fit from "./fit";
import Guide from "./guide";
import Interview from "./interview";
import Banner from "./banner";

const cx = classnames.bind(styles);

const AiIntroduce = () => {
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

      <div className={cx('onOffCoverWrap', 'contents')}>
        <OnOffCover/>
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
    </div>
  )
};

export default AiIntroduce;
