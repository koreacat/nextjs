import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

/**
 *
 */

export class Post {
	id: number;
	contents: string;
}

export default function Posts({ post, posts }) {
	return (
		<Layout>
			<Head>
				<title>post {post.id}</title>
			</Head>
			<h1>post {post.id}</h1>
			<div>
				<p>{post.contents}</p>
			</div>
			{
				posts[post.id - 1]
				&&
                <Link href={"/posts/" + (post.id - 1)}>
                    <button className={'prevPostBtn'}></button>
                </Link>
			}
			{
				posts[post.id + 1]
				&&
                <Link href={"/posts/" + (post.id + 1)}>
                    <button className={'nextPostBtn'}></button>
                </Link>
			}
		</Layout>
	)
}

// export async function getServerSideProps() {
// 	return { props: { ssr: true } }
// }

export async function getStaticPaths() {
	const posts: Post[] = await getPosts();
	const paths = posts.map((post) => `/posts/${post.id}`);
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const posts: Post[] = await getPosts();
	const post: Post = posts[params.id];
	return { props: { post: post, posts: posts } }
}

export async function getPosts() {
	return await new Promise<Post[]>((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					id: 0,
					contents: 'I\'m so happy\n' +
						'\'Cause today I found my friends\n' +
						'They\'re in my head, I\'m so ugly\n' +
						'That\'s okay \'cause so are you'
				},
				{
					id: 1,
					contents: 'Broke our mirrors\n' +
						'Sunday morning is everyday for all I care\n' +
						'And I\'m not scared, light my candles\n' +
						'In a daze \'cause I\'ve found God'
				},
				{
					id: 2,
					contents: 'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah, yeah'
				},
				{
					id: 3,
					contents: 'I\'m so lonely\n' +
						'That\'s okay, I shaved my head\n' +
						'And I\'m not sad and just maybe\n' +
						'I\'m to blame for all I\'ve heard'
				},
				{
					id: 4,
					contents: 'I\'m not sure, I\'m so excited\n' +
						'I can\'t wait to meet you there\n' +
						'And I don\'t care, I\'m so horny\n' +
						'That\'s okay, my will is good'
				},
				{
					id: 5,
					contents: 'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah\n' +
						'Yeah, yeah, yeah, yeah, yeah'
				},
				{
					id: 6,
					contents: 'I like it, I\'m not gonna crack\n' +
						'I miss you, I\'m not gonna crack\n' +
						'I love you, I\'m not gonna crack\n' +
						'I killed you, I\'m not gonna crack'
				},
				{
					id: 7,
					contents: 'I like it, I\'m not gonna crack\n' +
						'I miss you, I\'m not gonna crack\n' +
						'I love you, I\'m not gonna crack\n' +
						'I killed you, I\'m not gonna crack'
				},
			])
		}, 0)
	})
}
