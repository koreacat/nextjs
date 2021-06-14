import Layout from "../src/components/common/layout";
import classnames from "classnames/bind";
import styles from "../src/components/stickyScroll/stickyScroll.module.scss";
import detailData from "../src/components/stickyScroll/detailData";
import {Element, Link as ScrollLink} from "react-scroll/modules";
import {animateScroll, Events} from "react-scroll";
import {RefObject, useEffect, useRef, useState} from "react";

const cx = classnames.bind(styles);

type SCROLL_MODE = 'SCROLL' | 'CLICK';
let scrollMode: SCROLL_MODE = 'SCROLL';

interface DetailListProps {
	listEls: RefObject<Array<HTMLElement>>;
	active: number;
	setActive: (sn: number) => void;
}

const DetailList = (props: DetailListProps) => {
	const {listEls, active, setActive} = props;

	const handleClick = (sn: number) => {
		scrollMode = 'CLICK';
		setActive(sn);

		//스크롤 끝나면 스크롤 모드로 변경
		Events.scrollEvent.register('end', (to, element) => {
			scrollMode = 'SCROLL';
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
	listWrapEl: RefObject<HTMLDivElement>;
	listEls: RefObject<Array<HTMLElement>>;
	itemsEls: RefObject<Array<HTMLElement>>;
	active: number;
	setActive: (active: number) => void;
}

const DetailItems = (props: DetailItemsProps) => {
	const {listWrapEl, listEls, itemsEls, active, setActive} = props;
	let lastScrollTop = 0;
	const scrollUpOffset = 300;
	const scrollDownOffset = 300;

	const onScroll = () => {
		if (scrollMode !== 'SCROLL') return;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
		const windHeight = window.innerHeight;

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
	}, [active]);

	const items = detailData.map((d) => {
		return (
			<div key={d.sn} ref={(itemEl) => itemsEls.current[d.sn] = itemEl} className={cx('detailItems')}>
				<Element name={'scroll' + d.sn}>
					<span className={cx('title')}>{d.sn}</span>
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
									listEls={listEls}
									active={active}
									setActive={setActive}
								/>
							</ul>
						</div>
						<div className={cx('detail')}>
							<DetailItems
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

