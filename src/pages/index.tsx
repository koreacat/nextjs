import Head from "next/head"
import Link from "next/link";
import Layout from "@components/layout";

export default function Home() {

	return (
		<Layout>
			<Head>
				<title>index</title>
			</Head>
			<div>
				<h1>Next js</h1>
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
				<hr/>
				<h1>Interaction components</h1>
				<Link href={"/components"}>
					<a>Components</a>
				</Link>
				<hr/>
				<h1>layout</h1>
				<Link href={"/stickyScroll"}>
					<a>StickyScroll</a>
				</Link>
				<hr/>
			</div>
		</Layout>
	)
}
