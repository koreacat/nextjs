import Head from 'next/head'
import Layout from '@components/layout';
import Header from '@components/header';
import FixedHeader from '@components/fixedHeader';
import Contents from '@components/contents';
import Footer from '@components/footer';
import Index from "../components";

export default function Home() {

	return (
		<Layout>
			<Head>
				<title>index</title>
			</Head>
			<Header/>
			<FixedHeader/>
			<Contents>
        <Index/>
			</Contents>
			<Footer/>
		</Layout>
	)
}
