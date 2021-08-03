import Contents from "@components/contents";
import LineChart from "src/components/charts/lineChart";
import classnames from "classnames/bind";
import styles from "../components/charts/charts.module.scss";
import Layout from "@components/layout";

const cx = classnames.bind(styles);

const LineChartPage = () => {
    return (
        <Layout>
            <Contents>
                <div className={cx('wrap')}>
                    <LineChart />
                </div>
            </Contents>
        </Layout>

    )
};

export default LineChartPage;