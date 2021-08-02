import styles from './type02.module.scss';
import {useEffect, useState} from "react";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

interface NumberProps {
	num: number;
	delay: number;
}

const Number = (props: NumberProps) => {
	const {num, delay} = props;
	const [style, setStyle] = useState({transform: 'translateY(132px)'});

	useEffect(() => {
		setTimeout(() => {
			setStyle({transform: `translateY(-${num * 132}px)`})
		}, delay);
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
	count: number;
	unitText?: string;
}

const CountType02 = ({count, unitText}: CountProps) => {
	let countArr = count.toString().split('');
	let arr = Array.from({length: countArr.length}, () => '0');

	for (let i = 0; i < countArr.length; i++) {
		arr[arr.length - countArr.length + i] = countArr[i];
	}

	const NumberEl = arr.map((num, index) => {
		return <Number key={index} num={parseInt(num)} delay={(arr.length - 1 - index) * 300}/>
	});

	return (
		<div>
			<span className={cx('countWrap')}>
				<div className={cx('count')}>
					{NumberEl}
				</div>
				<span className={cx('unitText')}>{unitText}</span>
			</span>
		</div>
	)
};

export default CountType02;
