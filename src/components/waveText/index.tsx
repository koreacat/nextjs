import classnames from "classnames/bind";
import styles from "./waveText.module.scss";

const cx = classnames.bind(styles);

interface IWaveTextProps {
    text: string;
}

const WaveText = ({
    text
}: IWaveTextProps) => {

    const arr = text.split('').map((char, index) => {
        return (
            <span 
                key={index}
                className={cx('waveText')}
                style={{animationDelay: `${index * 0.1}s`}}
            >
                {char}
            </span>
        )
    });

    return (
        <div className={cx('waveTextWrap')}>
            {arr}
        </div>
    )
};

export default WaveText;