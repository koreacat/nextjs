import Link from "next/link";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classnames.bind(styles);

const Index = () => {
  return (
    <div className={cx('wrap')}>
      <h1 className={cx('title')}>Components</h1>
      <ul>
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
        <li>
          <Link href={'/virtualScroll'}>
            <a className={cx('contents')}>VirtualScroll</a>
          </Link>
        </li>
        <li>
          <Link href={'/selectList'}>
            <a className={cx('contents')}>SelectList</a>
          </Link>
        </li>
        <li>
          <Link href={'/components'}>
            <a className={cx('contents')}>Etc.</a>
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
          <Link href={'/radarChart'}>
            <a className={cx('contents')}>RadarChart</a>
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
        <li>
          <Link href={'/vennDiagram'}>
            <a className={cx('contents')}>VennDiagram</a>
          </Link>
        </li>
      </ul>
      <hr/>
      <h1 className={cx('title')}>Page</h1>
      <ul>
        <li>
          <Link href={'/scrollInteraction'}>
            <a className={cx('contents', 'new')}>ScrollInteraction</a>
          </Link>
        </li>
        <li>
          <Link href={'/introduction'}>
            <a className={cx('contents')}>AIIntroduction</a>
          </Link>
        </li>
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
            <a className={cx('contents', 'new')}>ChunSik</a>
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
    </div>
  )
};

export default Index;
