import classnames from "classnames/bind";
import { useRef, useState } from "react";
import { useScrollDir } from "src/util/hooks/useScroll";
import styles from "./realYou.module.scss";

const cx = classnames.bind(styles);

const RealYou = () => {
    const wrapEl = useRef<HTMLDivElement>(null);
    const [covered, setCovered] = useState(false);

    useScrollDir({
        el: wrapEl,
        scrollUpTopStart: -0.5,
        scrollUpTopEnd: -1.0,
        onScrollUp: () => {
            setCovered(true);
        },
        scrollDownTopSrtart: -1.0,
        scrollDownTopEnd: -0.5,
        onScrollDown: () => {
            setCovered(false);
        },
        wait: 10
    });
    
    useScrollDir({
        el: wrapEl,
        scrollUpTopStart: -2.0,
        scrollUpTopEnd: -2.5,
        onScrollUp: () => {
            setCovered(false);
        },
        scrollDownTopSrtart: -2.5,
        scrollDownTopEnd: -2.0,
        onScrollDown: () => {
            setCovered(true);
        },
        wait: 10
    });

    return (
        <div ref={wrapEl} className={cx('wrap')}>
            <span className={cx('cover', {'covered': covered})}/>
			<div className={cx('contentsWrap', {'covered': covered})}>
				<span className={cx('title')}>THE REAL YOU</span>
                <div className={cx('textWrap')}>
                    <span className={cx('text')}>열심히 응시한 AI역량검사 결과는</span>
				    <span className={cx('text')}>당신의 진짜 모습만 꾹꾹 담아 인사팀에 전달됩니다.</span>
                </div>
            </div>
        </div>
    )
}

export default RealYou;