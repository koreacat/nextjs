import Layout from "@components/layout";
import Contents from "@components/contents";
import FilterSlider from "src/components/filterSlider";

const FilterSliderPage = () => {
	return (
		<Layout>
            <Contents>
                <FilterSlider/>
            </Contents>
		</Layout>
	)
};

export default FilterSliderPage;
