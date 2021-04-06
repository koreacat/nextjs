import Head from "next/head"
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";

const WaterFill = () => {

	return (
		<>
			<svg version="1.1" x="0px" y="0px" style={{ display: 'none' }}>
				<symbol id="wave">
					<path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
					<path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
					<path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
					<path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
				</symbol>
			</svg>
			<div className="box">
				<div className="percent">
					<div className="percentNum" id="count">0</div>
					<div className="percentB">%</div>
				</div>
				<div id="water" className="water">
					<svg viewBox="0 0 560 20" className="water_wave water_wave_back">
						<use xlinkHref="#wave"></use>
					</svg>
					<div id="waterMiddle" className="water_wave_middle"/>
					<svg viewBox="0 0 560 20" className="water_wave water_wave_front">
						<use xlinkHref="#wave"></use>
					</svg>
				</div>
			</div>
		</>
	)
};

export default function Home() {
	useEffect(() => {
		var cnt = document.getElementById("count");
		var water = document.getElementById("water");
		var waterMiddle = document.getElementById("waterMiddle");
		var percent = cnt.innerText;
		var interval;
		interval = setInterval(function () {
			percent++;
			cnt.innerHTML = percent;
			water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';
			if (percent == 50) {
				waterMiddle.style.transform = 'translate(0' + ',' + '0%)';
				clearInterval(interval);
			}
		}, 60);
	}, []);


	return (
		<Layout>
			<Head>
				<title>index</title>
			</Head>
			<h1>index</h1>
			<WaterFill />
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
