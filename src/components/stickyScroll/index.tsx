import {useRef, useState} from "react";
import classnames from "classnames/bind";
import styles from "./stickyScroll.module.scss";
import {SCROLL_MODE} from "./data/detailData";
import DetailList from "./DetailList";
import DetailItems from "./DetailItems";

const cx = classnames.bind(styles);

const StickyScroll = () => {
  const [scrollMode, setScrollMode] = useState<SCROLL_MODE>('SCROLL');
  const [active, setActive] = useState(0);
  const listWrapEl = useRef<HTMLDivElement>(null);
  const listEls = useRef<Array<HTMLElement>>([]);
  const itemsEls = useRef<Array<HTMLElement>>([]);

  return (
    <div className={cx('wrap')}>
      <div className={cx('contentsWrap')}>
        <div className={cx('summary')}>
          <img src={'https://placedog.net/1120/300?random'}/>
        </div>
        <div className={cx('contents')}>
          <div ref={listWrapEl} id='listWrap' className={cx('list')}>
            <ul>
              <DetailList
                setScrollMode={setScrollMode}
                listEls={listEls}
                active={active}
                setActive={setActive}
              />
            </ul>
          </div>
          <div className={cx('detail')}>
            <DetailItems
              scrollMode={scrollMode}
              listWrapEl={listWrapEl}
              listEls={listEls}
              itemsEls={itemsEls}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default StickyScroll;
