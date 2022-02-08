import classnames from "classnames/bind";
import styles from "./question.module.scss";
import SpeechBubble from "src/components/etc/speechBubble";
import WordSlider from "src/components/etc/wordSlider";

const cx = classnames.bind(styles);

const Question = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('textWrap')}>
        <span>취업 준비하면서</span>
        <span>이런 생각해 본 적 없나요?</span>
      </div>
      <div className={cx('speechBubbleWrap')}>
        <SpeechBubble/>
      </div>
      <div className={cx('wordSliderWrap')}>
        <WordSlider/>
      </div>
    </div>
  )
};

export default Question;
