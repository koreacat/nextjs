import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Count from "../components/count";

const CountPage = () => {
	return (
		<Layout>
			<Header/>
            <FixedHeader/>
			<Contents>
				<Count/>
			</Contents>
		</Layout>
	)
};

export default CountPage;
