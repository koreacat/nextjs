import {AppProps} from 'next/app'
import Head from "next/head"
import '@styles/base.scss';
import '@styles/common.scss';

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>app</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
			<Component {...pageProps} />
        </>
    )

}

export default App
