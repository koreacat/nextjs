import classnames from "classnames/bind";
import styles from "./trends.module.scss";
import CountType02 from "src/components/count/type02";
import { useScrollDir } from "src/util/hooks/useScroll";
import { useRef, useState } from "react";

const cx = classnames.bind(styles);

const Trands = () => {
    const wrapEl = useRef<HTMLDivElement>(null);
    const [interactionTrigger, setInteractionTrigger] = useState(false);

    useScrollDir({
        el: wrapEl,
        scrollUpTop: -0.5,
        onScrollUp: () => {
            setInteractionTrigger(true);
        },
    });

    return (
        <div ref={wrapEl} className={cx('wrap')}>
            <div className={cx('emWrap')}>
                <span className={cx('em')}>세상에 없던 새로운 채용 트렌드를</span>
                <span className={cx('em')}>만들어 가고 있습니다.</span>
            </div>
            <ul className={cx('countList')}>
                <li className={cx('item')}>
                    <div className={cx('textWrap')}>
                        <span className={cx('title')}>기업</span>
                        <span className={cx('text')}>대기업, 공공기업, 스타트업 등</span>
                        <span className={cx('text')}>450사 이상이 AI역량검사 도입</span>
                    </div>
                    <CountType02 count={interactionTrigger && 450} unitText={'사'} />
                </li>
                <li className={cx('item')}>
                    <div className={cx('textWrap')}>
                        <span className={cx('title')}>응시자</span>
                        <span className={cx('text')}>2020년 기준</span>
                        <span className={cx('text')}>누적 응시자 수 30만명</span>
                    </div>
                    <CountType02 count={interactionTrigger && 30} unitText={'만'} />
                </li>
                <li className={cx('item')}>
                    <div className={cx('textWrap')}>
                        <span className={cx('title')}>트렌드</span>
                        <span className={cx('text')}>취준생이 선택한</span>
                        <span className={cx('text')}>2021 채용 트렌드 1위</span>
                    </div>
                    <CountType02 count={interactionTrigger && 1} unitText={'위'} />
                </li>
            </ul>
        </div>
    )
};

export default Trands;