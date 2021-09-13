import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import FilterSlider from "src/components/filterSlider";

const FilterSliderPage = () => {
	return (
		<Layout>
			<Header/>
            <FixedHeader/>
            <Contents>
                <FilterSlider/>
            </Contents>
		</Layout>
	)
};

export default FilterSliderPage;
