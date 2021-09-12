import Head from 'next/head'
import Link from 'next/link';
import Layout from '@components/layout';
import Contents from '@components/contents';
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
							<Link href={'/components'}>
								<a className={cx('contents')}>Components</a>
							</Link>
						</li>
						<li>
							<Link href={'/count'}>
								<a className={cx('contents')}>Count</a>
							</Link>
						</li>
						<li>
							<Link href={'/koreaMap'}>
								<a className={cx('contents')}>KoreaMap</a>
							</Link>
						</li>
						<li>
							<Link href={'/slider'}>
								<a className={cx('contents')}>Slider</a>
							</Link>
						</li>
						<li>
							<Link href={'/sliderTab'}>
								<a className={cx('contents')}>SliderTab</a>
							</Link>
						</li>
						<li>
							<Link href={'/waveText'}>
								<a className={cx('contents')}>WaveText</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>Layout</h1>
					<ul>
						<li>
							<Link href={'/stickyScroll'}>
								<a className={cx('contents')}>StickyScroll</a>
							</Link>
						</li>
						<li>
							<Link href={'/filterSlider'}>
								<a className={cx('contents')}>FilterSlider</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>Chart</h1>
					<ul>
						<li>
							<Link href={'/barChart'}>
								<a className={cx('contents')}>BarChart</a>
							</Link>
						</li>
						<li>
							<Link href={'/vennDiagram'}>
								<a className={cx('contents')}>VennDiagram</a>
							</Link>
						</li>
						<li>
							<Link href={'/dotChart'}>
								<a className={cx('contents')}>DotChart</a>
							</Link>
						</li>
						<li>
							<Link href={'/lineChart'}>
								<a className={cx('contents')}>LineChart</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>Page</h1>
					<ul>
						<li>
							<Link href={'/introduction'}>
								<a className={cx('contents')}>Introduction</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>WebGL</h1>
					<ul>
						<li>
							<Link href={'/webGL'}>
								<a className={cx('contents')}>Practice01</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>Effect</h1>
					<ul>
						<li>
							<Link href={'/wave'}>
								<a className={cx('contents')}>Wave</a>
							</Link>
						</li>
						<li>
							<Link href={'/gradation'}>
								<a className={cx('contents')}>Gradation</a>
							</Link>
						</li>
					</ul>
					<hr/>
					<h1 className={cx('title')}>Chracter</h1>
					<ul>
						<li>
							<Link href={'/chunSik'}>
								<a className={cx('contents')}>ChunSik</a>
							</Link>
						</li>
					</ul>
					<hr/>
				</div>
			</Contents>
		</Layout>
	)
}
