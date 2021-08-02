import Contents from "@components/contents";
import Layout from "@components/layout";
import classnames from "classnames/bind";
import styles from "../components/count/count.module.scss";
import Count from "../components/count";

const cx = classnames.bind(styles);

const CountPage = () => {
	return (
		<Layout>
			<Contents>
				<div className={cx('wrap')}>
					<Count/>
				</div>
			</Contents>
		</Layout>
	)
};

export default CountPage;
