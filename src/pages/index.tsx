import Head from "next/head"
import Link from "next/link";
import Layout from "@components/layout";
import Contents from "@components/contents";
import styles from './../components/index/index.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export default function Home() {

	return (
		<Layout>
			<Head>
				<title>index</title>
			</Head>
			<Contents>
				<div className={cx('wrap')}>
					<h1 className={cx('title')}>Interaction components</h1>
					<ul>
						<li>
							<Link href={"/components"}>
								<a className={cx('contents')}>Components</a>
							</Link>
						</li>
						<li>
							<Link href={"/charts"}>
								<a className={cx('contents')}>Charts</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>Layout</h1>
					<ul>
						<li>
							<Link href={"/stickyScroll"}>
								<a className={cx('contents')}>StickyScroll</a>
							</Link>
						</li>
						<li>
							<Link href={"/filterSlider"}>
								<a className={cx('contents')}>FilterSlider</a>
							</Link>
						</li>
					</ul>
					<hr/>
				</div>
			</Contents>
		</Layout>
	)
}
