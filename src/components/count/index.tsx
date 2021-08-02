import CountType01 from "./type01/index.";
import {useEffect, useState} from "react";
import {getInteger} from "../../util/getInteger";
import classnames from "classnames/bind";
import styles from "./count.module.scss";
import CountType02 from "./type02";

const cx = classnames.bind(styles);

const Count = () => {
	const [count, setCount] = useState(getInteger(100000));

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(getInteger(100000));
		}, 7000);

		return (() => {
			clearInterval(interval);
		})
	}, []);

	return (
		<div>
			<div className={cx('contentsWrap')}>
				<CountType01
					maxLength={1}
					count={count}
				/>
				<CountType01
					maxLength={3}
					count={count}
				/>
				<CountType01
					maxLength={5}
					count={count}
				/>
			</div>
			<div className={cx('contentsWrap')}>
				<CountType02
					count={450}
					unitText={'사'}
				/>
				<CountType02
					count={30}
					unitText={'만'}
				/>
				<CountType02
					count={1}
					unitText={'위'}
				/>
			</div>
		</div>

	)
};

export default Count;
