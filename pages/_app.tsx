import {AppProps} from 'next/app'
import Head from "next/head"
import '../styles/globals.scss';
import Layout from "../components/Layout";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>app</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )

}

export default App
