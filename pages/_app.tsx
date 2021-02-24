import React from "react";
import Head from "next/head"
import '../styles/globals.css';
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )

}

export default MyApp
