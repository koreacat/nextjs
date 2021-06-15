import Layout from "../src/components/common/layout";
import classnames from "classnames/bind";
import styles from "../src/components/stickyScroll/stickyScroll.module.scss";
import detailData from "../src/components/stickyScroll/detailData";
import {Element, Link as ScrollLink} from "react-scroll/modules";
import {animateScroll, Events} from "react-scroll";
import {RefObject, useEffect, useRef, useState} from "react";
import CircleProgress from "../src/components/circleProgress";
import {getInteger} from "../src/util/getInteger";

const cx = classnames.bind(styles);

type SCROLL_MODE = 'SCROLL' | 'CLICK';

interface DetailListProps {
	setScrollMode: (scrollMode: SCROLL_MODE) => void;
	listEls: RefObject<Array<HTMLElement>>;
	active: number;
	setActive: (sn: number) => void;
}

const DetailList = (props: DetailListProps) => {
	const {setScrollMode, listEls, active, setActive} = props;

	const handleClick = (sn: number) => {
		setScrollMode('CLICK');
		setActive(sn);

		//스크롤 끝나면 스크롤 모드로 변경
		Events.scrollEvent.register('end', (to, element) => {
			setScrollMode('SCROLL');
		});
	};

	const list = detailData.map((d) => {
		return (
			<li key={d.sn} ref={(listEl) => listEls.current[d.sn] = listEl} className={cx(d.sn === active && 'active')}>
				<ScrollLink
					onClick={() => handleClick(d.sn)}
					to={'scroll' + d.sn}
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


	const onScroll = () => {
		if (scrollMode !== 'SCROLL') return;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
		const windHeight = window.innerHeight;
		const scrollUpOffset = windHeight * 0.4;
		const scrollDownOffset = 300;

		itemsEls.current.map((itemEl, index) => {
			if(active === index) return;

			const elTop = itemEl?.getBoundingClientRect().top;
			const elBottom = itemEl?.getBoundingClientRect().bottom;

			if (scrollDir === 'UP') {
				if (elTop <= scrollUpOffset && elTop > -(itemEl.offsetHeight - scrollUpOffset)) {
					setActive(index);
					if(listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
						animateScroll.scrollTo(index * 100, {
							containerId: 'listWrap',
							smooth: false,
							ignoreCancelEvents:true
						});
					}
				}
			} else if (scrollDir === 'DOWN') {
				if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
					setActive(index);
					if(listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
						animateScroll.scrollTo(index * 100, {
							containerId: 'listWrap',
							smooth: false,
							ignoreCancelEvents:true
						});
					}
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

	const items = detailData.map((d) => {
		return (
			<div key={d.sn} ref={(itemEl) => itemsEls.current[d.sn] = itemEl} className={cx('detailItems')}>
				<Element name={'scroll' + d.sn}>
					<span className={cx('title')}>{d.sn}</span>
					<div style={{display: 'flex', justifyContent:'space-around', width: '100%', padding: '20px 0'}}>
						<CircleProgress title={'YELLOW'} r={60} percent={active === d.sn && scrollMode === 'SCROLL' ? getInteger(101) : 0} colorType={'YELLOW'}/>
						<CircleProgress title={'LIME'} r={60} percent={active === d.sn && scrollMode === 'SCROLL' ? getInteger(101) : 0} colorType={'LIME'}/>
						<CircleProgress title={'GREEN'} r={60} percent={active === d.sn && scrollMode === 'SCROLL' ? getInteger(101) : 0} colorType={'GREEN'}/>
						<CircleProgress title={'SKY'} r={60} percent={active === d.sn && scrollMode === 'SCROLL' ? getInteger(101) : 0} colorType={'SKY'}/>
						<CircleProgress title={'BLUE'} r={60} percent={active === d.sn && scrollMode === 'SCROLL' ? getInteger(101) : 0} colorType={'BLUE'}/>
					</div>
					<div>{d.contents}</div>
				</Element>
			</div>
		)
	});

	return (
		<>{items}</>
	);
};

const ScrollTop = () => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<button onClick={handleClick} className={cx('scrollTop')}/>
	)
};

const StickyScroll = () => {
	const [scrollMode, setScrollMode] = useState<SCROLL_MODE>('SCROLL');
	const [active, setActive] = useState(0);
	const listWrapEl = useRef<HTMLDivElement>(null);
	const listEls = useRef<Array<HTMLElement>>([]);
	const itemsEls = useRef<Array<HTMLElement>>([]);

	return (
		<Layout>
			<div className={cx('banner')}/>
			<div className={cx('wrap')}>
				<div className={cx('contentsWrap')}>
					<div className={cx('summary')}/>
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
			<ScrollTop/>
		</Layout>
	)
};

export default StickyScroll;

