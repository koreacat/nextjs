import detailData, {SCROLL_MODE} from "./data/detailData";
import {RefObject, useEffect} from "react";
import {scroller} from "react-scroll";
import {Element} from "react-scroll/modules";
import CircleProgress from "../etc/circleProgress";
import {getInteger} from "../../util/getInteger";
import classnames from "classnames/bind";
import styles from "./stickyScroll.module.scss";

const cx = classnames.bind(styles);

interface DetailItemsProps {
  scrollMode: SCROLL_MODE;
  listWrapEl: RefObject<HTMLDivElement>;
  listEls: RefObject<Array<HTMLElement>>;
  itemsEls: RefObject<Array<HTMLElement>>;
  active: number;
  setActive: (active: number) => void;
}

const DetailItems = (props: DetailItemsProps) => {
  const {scrollMode, listWrapEl, listEls, itemsEls, active, setActive} = props;
  let lastScrollTop = 0;

  const scrollTo = (index: number) => {
    if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
      scroller.scrollTo(`detailList${index}`, {
        containerId: 'listWrap',
        smooth: true,
        ignoreCancelEvents: true,
      });
    }
  };

  const onScroll = () => {
    if (scrollMode !== 'SCROLL') return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
    const windHeight = window.innerHeight;
    const scrollUpOffset = windHeight * 0.4;
    const scrollDownOffset = 300;

    itemsEls.current.map((itemEl, index) => {
      if (active === index) return;
      const elTop = itemEl?.getBoundingClientRect().top;
      const elBottom = itemEl?.getBoundingClientRect().bottom;

      if (scrollDir === 'UP') {
        if (elTop <= scrollUpOffset && elTop > -(itemEl.offsetHeight - scrollUpOffset)) {
          setActive(index);
          scrollTo(index);
        }
      } else if (scrollDir === 'DOWN') {
        if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
          setActive(index);
          scrollTo(index);
        }
      }

      lastScrollTop = (scrollTop <= 0 ? 0 : scrollTop);
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return (() => {
      document.removeEventListener('scroll', onScroll);
    })
  }, [active, scrollMode]);

  const items = detailData.map((d, index) => {
    return (
      <div key={index} ref={(itemEl) => itemsEls.current[index] = itemEl} className={cx('detailItems')}>
        <Element name={'scroll' + index}>
          <span className={cx('title')}>{d.sn}</span>
          <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', padding: '20px 0'}}>
            <CircleProgress title={'YELLOW'} r={60}
                            percent={active === index && scrollMode === 'SCROLL' && getInteger(101)}
                            colorType={'YELLOW'}/>
            <CircleProgress title={'LIME'} r={60}
                            percent={active === index && scrollMode === 'SCROLL' && getInteger(101)}
                            colorType={'LIME'}/>
            <CircleProgress title={'GREEN'} r={60}
                            percent={active === index && scrollMode === 'SCROLL' && getInteger(101)}
                            colorType={'GREEN'}/>
            <CircleProgress title={'SKY'} r={60}
                            percent={active === index && scrollMode === 'SCROLL' && getInteger(101)}
                            colorType={'SKY'}/>
            <CircleProgress title={'BLUE'} r={60}
                            percent={active === index && scrollMode === 'SCROLL' && getInteger(101)}
                            colorType={'BLUE'}/>
          </div>
          <img src={d.img}/>
          <div className={cx('contentsText')}>{d.contents}</div>
        </Element>
      </div>
    )
  });

  return (
    <>{items}</>
  );
};

export default DetailItems;