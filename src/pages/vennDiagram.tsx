import Layout from "@components/layout";
import Contents from "@components/contents";
import VennDiagram from "src/components/charts/vennDiagram";

const VennDiagramPage = () => {
    return (
		<Layout>
            <Contents>
                <VennDiagram/>
            </Contents>
        </Layout>
    )
};

export default VennDiagramPage;
