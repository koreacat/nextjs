import Head from "next/head"
import Link from "next/link";

export default function Home() {

    return (
        <div>
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
			</ul>
        </div>
    )
}
