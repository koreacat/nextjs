import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import SliderTab from "src/components/sliderTab";

const SliderTabPage = () => {

    return (
        <Layout>
			<Header/>
            <FixedHeader/>
			<Contents>
				<SliderTab/>
			</Contents>
		</Layout>
    );
};

export default SliderTabPage;