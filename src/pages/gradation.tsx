import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Gradation from "src/components/effect/gradation";

const GradationPage = () => {
    return (
        <Layout>
            <Header/>
            <FixedHeader/>
            <Contents>
                <Gradation />
            </Contents>
		</Layout>
    )
};

export default GradationPage;