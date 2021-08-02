import styles from './type01.module.scss';
import classnames from 'classnames/bind';
import {useEffect, useState} from "react";

const cx = classnames.bind(styles);

interface NumberProps {
	num: number;
}

const Number = (props: NumberProps) => {
	const {num} = props;
	const [style, setStyle] = useState({transform: 'translateY(0px)'});

	useEffect(() => {
		setTimeout(() => {
			setStyle({transform: `translateY(-${num * 57}px)`})
		}, 0);
	}, [num]);

	const digitEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
		return <span key={index} className={cx('digit')}>{index}</span>
	});

	return (
		<div className={cx('number')} style={style}>
			{digitEl}
		</div>
	)
};

interface CountProps {
	maxLength: number;
	count: number;
}

const CountType01 = (props: CountProps) => {
	const {count, maxLength} = props;
	let countArr = count.toString().split('');
	let arr = Array.from({length: maxLength}, () => '0');

	for (let i = 0; i < countArr.length; i++) {
		arr[arr.length - countArr.length + i] = countArr[i];
	}

	const NumberEl = arr.map((num, index) => {
		return <Number key={index} num={parseInt(num)}/>
	});

	return (
		<div className={cx('wrap')}>
			<span className={cx('countWrap')}>
				<div className={cx('count')}>
					{NumberEl}
				</div>개
			</span>
		</div>
	)
};

export default CountType01;
