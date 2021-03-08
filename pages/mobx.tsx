import React from 'react';
import Head from "next/head";
import {MobXProviderContext, observer} from "mobx-react";
import MobxStore from "../store/mobxStore";
import { Provider } from "mobx-react";
import Layout from "../components/layout/Layout";

const AnimalInfo = observer(({data}) => {
	const { mobxStore } = React.useContext(
		MobXProviderContext
	);

	const { type, age } = mobxStore;

	return (
		<div>
			<div>type: {type || data.cat.type}</div>
			<div>age: {age || data.cat.age}</div>
		</div>
	)
});

const mobxStore = new MobxStore();
const Mobx = ({data}) => {

	return (
		<Layout>
			<Head>
				<title>mobx</title>
				<meta name="mobx" content="mobx" />
			</Head>
			<h1>mobx</h1>
			<Provider mobxStore={mobxStore}>
				<AnimalInfo data={data}/>
			</Provider>
		</Layout>
	)
};

//static generation
export async function getStaticProps() {
	return {
		props: {
			data: {
				cat: {
					type: '먼치킨(Static Generation)',
					age: 0
				}
			}
		}
	}
}

export default Mobx;
