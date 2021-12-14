import styles from './sliderTab.module.scss';
import classnames from 'classnames/bind';
import {useStores} from 'src/util/storeProvider';
import {observer} from 'mobx-react';

const cx = classnames.bind(styles);

const data = [
  '기계/자동차/조선',
  '금속/재료',
  '전기/전자/제어',
  '화학/고분자',
  '에너지/환경/자원',
  '인문/사회',
  '생명/의료/식품',
  '순수과학'
];

const List = observer(() => {
  const {sliderTabUIStore} = useStores();
  const {
    MARGIN_LEFT,
    itemsEls,
    scrollOffset,
    currentItemIndex,
    setCurrentItemIndex
  } = sliderTabUIStore;

  const list = data.map((item, index) => {
    return (
      <li
        key={index}
        ref={(itemEl) => {
          itemsEls && itemEl && (itemsEls[index] = itemEl);
        }}
        className={cx('item', {'selected': currentItemIndex === index})}
        style={{marginLeft: `${MARGIN_LEFT}px`}}
        onClick={() => setCurrentItemIndex(index)}
      >
        <span className={cx('title')}>{item}</span>
      </li>
    )
  });

  return (
    <ul
      className={cx('list')}
      style={{transform: `translate3d(${scrollOffset}px, 0px, 0px)`}}
    >
      {list}
    </ul>
  )
});

const ArrowRight = () => {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10">
      <path
        d="M8.17863 8.99801C7.96455 9.2121 7.96455 9.55919 8.17863 9.77328C8.39272 9.98736 8.73981 9.98736 8.9539 9.77328L13.3394 5.38773C13.5535 5.17365 13.5535 4.82655 13.3394 4.61247L8.9539 0.22693C8.73981 0.0128475 8.39272 0.0128475 8.17864 0.22693C7.96455 0.441012 7.96455 0.788109 8.17864 1.00219L11.6284 4.45191L1.04819 4.45191C0.745434 4.45191 0.5 4.69734 0.5 5.0001C0.5 5.30286 0.745434 5.54829 1.04819 5.54829L11.6284 5.5483L8.17863 8.99801Z"
        fill="#9FA4AB"
      />
    </svg>
  )
}

const ArrowLeft = () => {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10">
      <path
        d="M5.82137 1.00199C6.03545 0.787903 6.03545 0.440807 5.82137 0.226724C5.60728 0.0126415 5.26019 0.0126415 5.0461 0.226724L0.660562 4.61227C0.446479 4.82635 0.446479 5.17345 0.660562 5.38753L5.0461 9.77307C5.26019 9.98715 5.60728 9.98715 5.82137 9.77307C6.03545 9.55899 6.03545 9.21189 5.82137 8.99781L2.37165 5.54809H12.9518C13.2546 5.54809 13.5 5.30266 13.5 4.9999C13.5 4.69714 13.2546 4.4517 12.9518 4.4517H2.37165L5.82137 1.00199Z"
        fill="#9FA4AB"
      />
    </svg>
  )
}

const SliderTab = observer(() => {
  const {sliderTabUIStore} = useStores();
  const {
    SLIDER_CONTENTS_WIDTH,
    currentItemIndex,
    setCurrentItemIndex
  } = sliderTabUIStore;

  return (
    <div className={cx('wrap')}>
      <div className={cx('tab')}>
        <div className={cx('slider')} style={{width: SLIDER_CONTENTS_WIDTH}}>
          <List/>
        </div>
        <i className={cx('gradient', 'left')}/>
        <i className={cx('gradient', 'right')}/>
        <div className={cx('btnWrap')}>
          <a className={cx('btn')} onClick={() => setCurrentItemIndex(currentItemIndex - 1)}>
            <ArrowLeft/>
          </a>
          <a className={cx('btn')} onClick={() => setCurrentItemIndex(currentItemIndex + 1)}>
            <ArrowRight/>
          </a>
        </div>
      </div>
    </div>
  )
});

export default SliderTab;
