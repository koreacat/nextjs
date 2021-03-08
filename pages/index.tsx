import Head from "next/head"
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Home() {

    return (
        <Layout>
            <Head>
                <title>index</title>
            </Head>
            <h1>index</h1>
			<ul>
				<li>
					<Link href={"/staticGeneration"}>
						<a>Static Generation</a>
					</Link>
				</li>
				<li>
					<Link href={"/mobx"}>
						<a>mobx</a>
					</Link>
				</li>
				<li>
					<Link href={"/posts/0"}>
						<a>getStaticPaths</a>
					</Link>
				</li>
				<li>
					<Link href={"/catImage"}>
						<a>Cat Image</a>
					</Link>
				</li>
				<li>
					<Link href={"/environmentVariables"}>
						<a>environmentVariables</a>
					</Link>
				</li>
			</ul>
        </Layout>
    )
}
