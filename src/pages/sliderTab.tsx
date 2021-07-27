import Layout from "@components/layout";
import Contents from "@components/contents";
import classnames from "classnames/bind";
import styles from "../components/sliderTab/sliderTab.module.scss";
import SliderTab from "src/components/sliderTab";

const cx = classnames.bind(styles);

const SliderTabPage = () => {

    return (
        <Layout>
			<Contents>
				<div className={cx('wrap')}>
					<SliderTab/>
				</div>
			</Contents>
		</Layout>
    );
};

export default SliderTabPage;