import Head from 'next/head'
import Layout from '@components/layout';
import Header from '@components/header';
import Contents from '@components/contents';
import Index from "../components";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>index</title>
      </Head>
      <Header/>
      <Contents>
        <Index/>
      </Contents>
    </Layout>
  )
}
