import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Layout from "../components/layout/Layout";

/**
 * next 에서 제공하는 이미지 최적화 컴포넌트 Image
 */

const CatImage = () => {

	return (
		<Layout>
			<Head>
				<title>Cat Image</title>
			</Head>
			<h1>Cat Image</h1>

			<ul>
				<li>
					<p>Image</p>
					<Image
						src={"/nextjs/cat.jpg"}
						width={500}
						height={500}
					/>
				</li>
				<li>
					<p>img</p>
					<img
						src={"/nextjs/cat.jpg"}
						width={500}
						height={500}
					/>
				</li>
			</ul>
		</Layout>
	)
};

export default CatImage;
