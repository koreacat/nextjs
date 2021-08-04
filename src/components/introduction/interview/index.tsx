import classnames from "classnames/bind";
import styles from "./interview.module.scss";

const cx = classnames.bind(styles);

const List = () => {
    return (
        <ul className={cx('list')}>
            <li className={cx('item')}>
                <div className={cx('imgWrap')} onClick={() => {alert('멍멍!')}}>
                    <div className={cx('imgCover')}>
                        <img className={cx('img')} src={'https://placedog.net/232/232?random'}/>
                    </div>
                </div>
                <div className={cx('tagWrap')}>
                    <span className={cx('tag')}>정행호</span>
                    <span className={cx('tag')}>유통・영업지원</span>
                </div>
                <div className={cx('contentsWrap')}>
                    <span className={cx('contents')}>전공으로는 대변하지 못한</span>
                    <span className={cx('contents')}>모습을 보여줬어요.</span>
                </div>
                <div className={cx('descWrap')}>
                    <span className={cx('desc')}>다른 기업 질문과 다르게 공격적이지 않고,</span>
                    <span className={cx('desc')}>미리 질문을 준비할 수 있어서 좋았어요.</span>
                </div>
            </li>
            <li className={cx('item')}>
                <div className={cx('imgWrap')} onClick={() => {alert('멍멍!')}}>
                    <div className={cx('imgCover')}>
                        <img className={cx('img')} src={'https://placedog.net/232/232'}/>
                    </div>
                </div>
                <div className={cx('tagWrap')}>
                    <span className={cx('tag')}>이새론</span>
                    <span className={cx('tag')}>IT 영업・마케팅</span>
                </div>
                <div className={cx('contentsWrap')}>
                    <span className={cx('contents')}>자신에 대해 먼저</span>
                    <span className={cx('contents')}>알아보는게 중요해요</span>
                </div>
                <div className={cx('descWrap')}>
                    <span className={cx('desc')}>불합격하면 나랑 맞지 않는 기업, 직무라</span>
                    <span className={cx('desc')}>생각하고 나를 솔직하게 보여줬어요.</span>
                </div>
            </li>
            <li className={cx('item')}>
                <div className={cx('imgWrap')} onClick={() => {alert('멍멍!')}}>
                    <div className={cx('imgCover')}>
                        <img className={cx('img')} src={'https://placedog.net/232'}/>
                    </div>
                </div>               
                <div className={cx('tagWrap')}>
                    <span className={cx('tag')}>박정현</span>
                    <span className={cx('tag')}>SW・영업지원</span>
                </div>
                <div className={cx('contentsWrap')}>
                    <span className={cx('contents')}>스펙이 아닌 제 역량을</span>
                    <span className={cx('contents')}>정확히 보더라구요</span>
                </div>
                <div className={cx('descWrap')}>
                    <span className={cx('desc')}>겉모습이 아닌 제 능력에 대한 객관적 평가를</span>
                    <span className={cx('desc')}>받을 수 있기 때문에 자신 있게 봤어요.</span>
                </div>
            </li>
        </ul>
    )
};

const Interview = () => {

    return (
        <div className={cx('wrap')}>
            <div className={cx('titleWrap')}>
                <span className={cx('title')}>먼저 경험한 선배들이 알려주는 AI역량검사 꿀팁.</span>
                <span className={cx('title')}>지금 바로 확인하세요.</span>
            </div>
            <div className={cx('listWrap')}>
                <List/>
            </div>
        </div>
    )
};

export default Interview;