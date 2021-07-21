import Layout from "@components/layout";
import Contents from "@components/contents";
import VennDiagram from "src/components/charts/vennDiagram";
import styles from '../components/charts/charts.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const VennDiagramPage = () => {
    return (
		<Layout>
            <Contents>
                <div className={cx('wrap')}>
                    <VennDiagram/>
                </div>
            </Contents>
        </Layout>
    )
};

export default VennDiagramPage;
