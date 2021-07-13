import {AppProps} from 'next/app'
import Head from "next/head"
import '@styles/base.scss';
import '@styles/common.scss';
import {getStores} from "../store";
import {StoreProvider} from "../util/storeProvider";

function App({Component, pageProps}: AppProps) {
    const rootStores = getStores();

	return (
        <>
            <Head>
                <title>app</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
			<StoreProvider value={rootStores}>
				<Component {...pageProps} />
			</StoreProvider>
        </>
    )

}

export default App
