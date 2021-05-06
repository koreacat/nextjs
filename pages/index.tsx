import Head from "next/head"
import Link from "next/link";
import Layout from "../components/layout/Layout";
import {useEffect, useState} from "react";

import classNames from 'classnames/bind';

interface NumberProps {
	num: number;
}

const Number = (props: NumberProps) => {
	const {num} = props;
	const [style, setStyle] = useState({transform: 'translateY(0px)'});

	useEffect(() => {
		setTimeout(() => {
			setStyle({transform: `translateY(-${num * 57}px)`})
		}, 0);
	}, [num]);

	const digitEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
		return <span className={classNames('digit')}>{index}</span>
	});

	return (
		<div className={classNames('number')} style={style}>
			{digitEl}
		</div>
	)
};

interface CountProps {
	count: number;
}

const Count = (props: CountProps) => {
	const {count} = props;
	const arr = count.toString().split('');

	const NumberEl = arr.map((num) => {
		return <Number num={parseInt(num)}/>
	});

	return (
		<div className={classNames('count')}>
			{NumberEl}
		</div>
	)
};

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
			<span className={classNames('countWrap')}>
				<Count count={94949}/>개
			</span>
		</Layout>
	)
}
