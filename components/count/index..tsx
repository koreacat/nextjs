import styles from './count.module.scss';
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
		return <span className={cx('digit')}>{index}</span>
	});

	return (
		<div className={cx('number')} style={style}>
			{digitEl}
		</div>
	)
};

interface CountProps {
	count: number;
}

const Count = (props: CountProps) => {
	const {count} = props;
	const arr = count.toString().split('');

	const NumberEl = arr.map((num) => {
		return <Number num={parseInt(num)}/>
	});

	return (
		<span className={cx('countWrap')}>
			<div className={cx('count')}>
				{NumberEl}
			</div>개
		</span>
	)
};

export default Count;
