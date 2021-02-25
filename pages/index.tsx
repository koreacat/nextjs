import Head from "next/head"
import Link from "next/link";

export default function Home() {

    return (
        <div>
            <Head>
                <title>index</title>
            </Head>
            <h1>index</h1>
            <Link href={"/a"}>
                <a>A</a>
            </Link>
        </div>
    )
}
