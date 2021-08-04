import classnames from "classnames/bind";
import styles from "./cardBanner.module.scss";

const cx = classnames.bind(styles);

interface Card {
    color?: 'GREEN' | 'YELLOW' | 'SKY';
}

const Card = ({color}: Card) => {
    return (
        <div className={cx('card', color)}>
            
        </div>
    )
};

const CardBanner = () => {
    return (
        <div className={cx('wrap')}>
            <div className={cx('titleWrap')}>
                <span className={cx('title')}>먼저 경험한 선배들이 알려주는 AI역량검사 꿀팁.</span>
                <span className={cx('title')}>지금 바로 확인하세요.</span>
            </div>
            <div className={cx('cardWrap')}>
                <Card color={'GREEN'}/>
                <Card color={'YELLOW'}/>
                <Card color={'SKY'}/>
            </div>
        </div>
    )
};

export default CardBanner;