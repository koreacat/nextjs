import Head from "next/head"
import Link from "next/link";

export default function a() {
    return (
        <div>
            <Head>
                <title>A</title>
                <meta name="a" content="a" />
            </Head>
            <h1>A</h1>
            <Link href={"/"}>
                <a>index</a>
            </Link>
        </div>
    )
}
