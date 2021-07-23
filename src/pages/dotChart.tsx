import Layout from "@components/layout";
import Contents from "@components/contents";
import DotChart from "../components/charts/dotChart";
import classnames from "classnames/bind";
import styles from "../components/charts/charts.module.scss";

const cx = classnames.bind(styles);

const DotChartPage = () => {
	return (
		<Layout>
			<Contents>
				<div className={cx('wrap')}>
					<DotChart/>
				</div>
			</Contents>
		</Layout>
	)
};

export default DotChartPage;
