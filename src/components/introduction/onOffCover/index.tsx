import classnames from "classnames/bind";
import styles from "./onOffCover.module.scss";
import {useRef, useState} from "react";
import { useScrollDir } from "src/util/hooks/useScroll";

const cx = classnames.bind(styles);

interface Card {
	title?: string;
	listTitle?: string;
	list?: Array<string>;
	img?: string;
}

const Card = ({title, listTitle, list, img}: Card) => {

	const listEl = list?.map((data, index) => {
		return <li key={index} className={cx('item')}>{data}</li>
	});

	return (
		<div className={cx('card')}>
			<div className={cx('profileWrap')}>
				<span className={cx('title')}>{title}</span>
				<img className={cx('profileImg')} src={`/nextjs/img/${img}`}/>
			</div>
			<div className={cx('listWrap')}>
				<span className={cx('listTitle')}>{listTitle}</span>
				<ul className={cx('list')}>
					{listEl}
				</ul>
			</div>
		</div>
	)
};

const OnOffCover = () => {
	const [visible, setVisible] = useState(false);
    const wrapEl = useRef<HTMLDivElement>(null);

	useScrollDir({
        el: wrapEl,
        scrollUpTop: -1,
        onScrollUp: () => {
            setVisible(true);
        },
    });

	return (
		<div ref={wrapEl} className={cx('wrap')}>
			<div className={cx('contentsWrap')}>
				<div className={cx('contents', 'off')}>
					<span className={cx('text')}>서류와 몇 줄 스펙만으로는..</span>
					<span className={cx('text', 'em')}>나의 모든 것을 다 설명할 수 없어요.</span>
					<div className={cx('cardWrap')}>
						<i className={cx('bulbOff')} onClick={() => setVisible(true)}/>
						<Card title={'지원자 A'} listTitle={'보유 스펙'}
							  list={['지방 출신 대학', '이공계', '학점 3.2', '어학점수 無', '어학연수 無']}
							  img={'imgApplicantOffA.png'}
						/>
						<Card title={'지원자 B'} listTitle={'보유 스펙'}
							  list={['고등학교 졸업', '인턴경험 無', '대외활동 無', '수상경험 無', '보유 자격증 3개']}
							  img={'imgApplicantOffB.png'}
						/>
						<Card title={'지원자 C'} listTitle={'보유 스펙'}
							  list={['수도권 대학', '인문계', '학점 3.2', '어학점수 890점', '봉사활동 無']}
							  img={'imgApplicantOffC.png'}
						/>
					</div>
				</div>
				<div className={cx('contentsCover', {'visible': visible})}>
					<div className={cx('contents', 'on')}>
						<span className={cx('text')}>서류와 몇 마디 말로는 다 표현하지 못한</span>
						<span className={cx('text', 'em')}>여러분만의 역량 스펙트럼을 보여주세요.</span>
						<div className={cx('cardWrap')}>
						<i className={cx('bulbOn')} onClick={() => setVisible(false)}/>
							<Card title={'지원자 A'} listTitle={'동료 평가'}
								  list={['“ 협업 및 소통 능력이 뛰어나 ”', '“ 정말 열정적인 사람이야! ”', '“ 발상이 정말 창의적이야! “', '“ 논리적으로 표현할 줄 알아 “']}
								  img={'imgApplicantOnA.png'}
							/>
							<Card title={'지원자 B'} listTitle={'동료 평가'}
								  list={['“ 끈기 있고 추진력 있어 ”', '“ 어떤 일을 맡겨도 잘 해내! ”', '“ 정말 성실한 편이야 ”', '“ 목표달성 능력이 대단해 ”']}
								  img={'imgApplicantOnB.png'}
							/>
							<Card title={'지원자 C'} listTitle={'동료 평가'}
								  list={['“ 의사표현 능력이 좋아 ”', '“ 일을 전략적으로 접근해! ”', '“ 감정전달 능력이 뛰어나 ”', '“ 매사에 정말 긍정적인 편이야 ”']}
								  img={'imgApplicantOnC.png'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default OnOffCover;
