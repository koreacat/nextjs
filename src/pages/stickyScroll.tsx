import Layout from "@components/layout";
import Contents from "@components/contents";
import Banner from "../components/stickyScroll/banner";
import StickyScroll from "../components/stickyScroll";
import ScrollTop from "../components/stickyScroll/scrollTop";

const StickyScrollPage = () => {
	return (
		<Layout>
			<Contents>
				<Banner/>
				<StickyScroll/>
				<ScrollTop/>
			</Contents>
		</Layout>
	)
};

export default StickyScrollPage;
