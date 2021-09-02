import classnames from "classnames/bind";
import { observer } from "mobx-react";
import styles from "./koreaMap.module.scss";
import LocationList from "./locationList";
import Map from "./map";

const cx = classnames.bind(styles);

const KoreaMap = () => {
	return (
		<div className={cx('wrap')} >
			<LocationList/>
			<Map/>
		</div>
	)
}

export default observer(KoreaMap);
