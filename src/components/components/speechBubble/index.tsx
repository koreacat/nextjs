import classnames from "classnames/bind";
import styles from "./speechBubble.module.scss";

const cx = classnames.bind(styles);

const SpeechBubble = () => {
  return (
    <div className={cx('wrap')}>
      <svg width="148" height="76" viewBox="0 0 148 76">
        <path
          d="M132.76 67.5244C132.76 67.5244 123.63 76 110.284 76H107.805H93.4605H33.0696C14.8783 76 0 61.191 0 42.9998V33.0693C0 14.878 14.8783 -0.000244141 33.0696 -0.000244141H107.805C125.997 -0.000244141 140.875 14.878 140.875 33.0693V42.9998C140.875 51.8975 139.61 60.451 142.123 65.5883C144.635 70.7255 148 71.4656 148 71.4656C148 71.4656 140.178 72.8854 132.76 67.5244Z"
          fill="white"/>
        <circle className={cx('dot')} cx="42" cy="38" r="8" fill="#3ED160"/>
        <circle className={cx('dot')} cx="70" cy="38" r="8" fill="#3ED160"/>
        <circle className={cx('dot')} cx="98" cy="38" r="8" fill="#3ED160"/>
      </svg>
    </div>
  )
};

export default SpeechBubble;
