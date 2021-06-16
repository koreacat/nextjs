import Layout from "../src/components/common/layout";
import classnames from "classnames/bind";
import styles from "../src/components/stickyScroll/stickyScroll.module.scss";
import detailData from "../src/components/stickyScroll/detailData";
import {Element, Link as ScrollLink} from "react-scroll/modules";
import {Events, scroller} from "react-scroll";
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
				className={cx(index === active && 'active')} style={{height: `calc(100px + ${d.sn * 20}px)`}}>
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
				ignoreCancelEvents: true
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
										percent={active === index && scrollMode === 'SCROLL' ? getInteger(101) : 0}
										colorType={'YELLOW'}/>
						<CircleProgress title={'LIME'} r={60}
										percent={active === index && scrollMode === 'SCROLL' ? getInteger(101) : 0}
										colorType={'LIME'}/>
						<CircleProgress title={'GREEN'} r={60}
										percent={active === index && scrollMode === 'SCROLL' ? getInteger(101) : 0}
										colorType={'GREEN'}/>
						<CircleProgress title={'SKY'} r={60}
										percent={active === index && scrollMode === 'SCROLL' ? getInteger(101) : 0}
										colorType={'SKY'}/>
						<CircleProgress title={'BLUE'} r={60}
										percent={active === index && scrollMode === 'SCROLL' ? getInteger(101) : 0}
										colorType={'BLUE'}/>
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

