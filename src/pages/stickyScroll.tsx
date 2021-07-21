import Layout from "@components/layout";
import Banner from "../components/stickyScroll/banner";
import StickyScroll from "../components/stickyScroll";
import ScrollTop from "../components/stickyScroll/scrollTop";

const StickyScrollPage = () => {
	return (
		<Layout>
			<Banner/>
			<StickyScroll/>
			<ScrollTop/>
		</Layout>
	)
};

export default StickyScrollPage;

