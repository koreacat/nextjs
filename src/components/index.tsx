import Link from "next/link";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classnames.bind(styles);

const Index = () => {
  return (
    <div className={cx('wrap')}>
      {/*<i className={cx('new')}>new</i>*/}
      {/*<i className={cx('dom')}>dom</i>*/}
      {/*<i className={cx('svg')}>svg</i>*/}
      {/*<i className={cx('canvas')}>canvas</i>*/}

      <h1 className={cx('title')}>Components</h1>
      <ul>
        <li>
          <Link href={'/count'}>
            <a className={cx('contents')}>
              Count
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/koreaMap'}>
            <a className={cx('contents')}>
              KoreaMap
              <i className={cx('dom')}>dom</i>
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/slider'}>
            <a className={cx('contents')}>
              Slider
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/sliderTab'}>
            <a className={cx('contents')}>
              SliderTab
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/waveText'}>
            <a className={cx('contents')}>
              WaveText
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link href={'/virtualScroll'}>*/}
        {/*    <a className={cx('contents')}>VirtualScroll</a>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li>
          <Link href={'/components'}>
            <a className={cx('contents')}>
              Etc.
              <i className={cx('dom')}>dom</i>
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
      </ul>
      <hr/>
      <h1 className={cx('title')}>Chart</h1>
      <ul>
        <li>
          <Link href={'/barChart'}>
            <a className={cx('contents')}>
              BarChart
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/radarChart'}>
            <a className={cx('contents')}>
              RadarChart
              <i className={cx('dom')}>dom</i>
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/dotChart'}>
            <a className={cx('contents')}>
              DotChart
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/lineChart'}>
            <a className={cx('contents')}>
              LineChart
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/vennDiagram'}>
            <a className={cx('contents')}>
              VennDiagram
              <i className={cx('dom')}>dom</i>
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
      </ul>
      <hr/>
      <h1 className={cx('title')}>Page</h1>
      <ul>
        <li>
          <Link href={'/maskInteraction'}>
            <a className={cx('contents')}>
              MaskInteraction
              <i className={cx('new')}>new</i>
              <i className={cx('canvas')}>canvas</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/scrollInteraction'}>
            <a className={cx('contents')}>
              ScrollInteraction
              <i className={cx('new')}>new</i>
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/introduction'}>
            <a className={cx('contents')}>
              AIIntroduction
              <i className={cx('dom')}>dom</i>
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/stickyScroll'}>
            <a className={cx('contents')}>
              StickyScroll
              <i className={cx('dom')}>dom</i>
              <i className={cx('svg')}>svg</i>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/filterSlider'}>
            <a className={cx('contents')}>
              FilterSlider
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
      </ul>
      <hr/>
      <h1 className={cx('title')}>Effect</h1>
      <ul>
        <li>
          <Link href={'/wave'}>
            <a className={cx('contents')}>
              Wave
              <i className={cx('canvas')}>canvas</i>
            </a>
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link href={'/gradation'}>*/}
        {/*    <a className={cx('contents')}>Gradation</a>*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
      <hr/>
      <h1 className={cx('title')}>Chracter</h1>
      <ul>
        <li>
          <Link href={'/chunSik'}>
            <a className={cx('contents', 'new')}>
              ChunSik
              <i className={cx('dom')}>dom</i>
            </a>
          </Link>
        </li>
      </ul>
      <hr/>
      <h1 className={cx('title')}>WebGL</h1>
      <ul>
        <li>
          <Link href={'/webGL'}>
            <a className={cx('contents')}>
              Practice01
              <i className={cx('canvas')}>canvas</i>
            </a>
          </Link>
        </li>
      </ul>
      <hr/>
    </div>
  )
};

export default Index;
