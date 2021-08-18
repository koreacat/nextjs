import Layout from "@components/layout";
import Contents from "@components/contents";
import Practice01 from "../components/webGL/practice01";
import Head from "next/head";

const WebGL = () => {
	return (
		<Layout>
			<Head>
				<script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"/>
			</Head>
			<Contents>
				<Practice01/>
			</Contents>
		</Layout>
	)
};

export default WebGL;
