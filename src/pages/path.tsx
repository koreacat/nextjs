import {useEffect, useState} from "react";
import Layout from "@components/layout";

const Path = () => {
	const [ran, setRan] = useState(0);
	let count = 0;

	useEffect(() => {
		const interval = setInterval(() => {
			count ++;
		}, 250);

		return (() => {
			clearInterval(interval);
		})
	}, [count]);


	return (
		<Layout>
			<svg width='800' height='800' viewBox='0 0 800 800'>
				<path d="M10 10 H90 V90 H10 V10 M150 150 h50 v50 h-50 Z" fill='transparent' stroke='#000'/>

				<path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
				<path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>

			</svg>
		</Layout>
	)
};

export default Path;
