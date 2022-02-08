import {RefObject} from "react";
import {Events} from "react-scroll";
import detailData, {SCROLL_MODE} from "./data/detailData";
import {Element, Link as ScrollLink} from "react-scroll/modules";
import classnames from "classnames/bind";
import styles from "./stickyScroll.module.scss";

const cx = classnames.bind(styles);

interface DetailListProps {
  setScrollMode: (scrollMode: SCROLL_MODE) => void;
  listEls: RefObject<Array<HTMLElement>>;
  active: number;
  setActive: (sn: number) => void;
}

const DetailList = (props: DetailListProps) => {
  const {setScrollMode, listEls, active, setActive} = props;

  const handleClick = (index: number) => {
    setScrollMode('CLICK');
    setActive(index);

    //스크롤 끝나면 스크롤 모드로 변경
    Events.scrollEvent.register('end', (to, element) => {
      setScrollMode('SCROLL');
    });
  };

  const list = detailData.map((d, index) => {
    return (
      <li key={index} ref={(listEl) => listEls.current[index] = listEl}
          className={cx(index === active && 'active')} style={{height: `calc(100px + ${d.sn * 30 % 100}px)`}}>
        <Element name={`detailList${index}`}/>
        <ScrollLink
          onClick={() => handleClick(index)}
          to={'scroll' + index}
          smooth={true}
          offset={-100}
        >
          {d.sn}
        </ScrollLink>
      </li>
    )
  });

  return (
    <>{list}</>
  );
};

export default DetailList;