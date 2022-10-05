import Link from "next/link";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classnames.bind(styles);

const titles = ['page', 'components', 'effect', 'character', 'webgl'];

const menu = {
  page: [
    {
      name: 'aiIntroduce',
      type: ['dom', 'svg']
    },
    {
      name: 'stickyScroll',
      type: ['dom', 'svg']
    },
    {
      name: 'maskInteraction',
      type: ['canvas']
    },
    {
      name: 'matchIntroduce',
      type: ['dom', 'new']
    },
  ],
  components: [
    {
      name: 'count',
      type: ['dom']
    },
    {
      name: 'koreaMap',
      type: ['dom', 'svg']
    },
    {
      name: 'slider',
      type: ['dom']
    },
    {
      name: 'components',
      type: ['dom', 'svg']
    },
    {
      name: 'barChart',
      type: ['dom']
    },
    {
      name: 'radarChart',
      type: ['dom', 'svg']
    },
    {
      name: 'lineChart',
      type: ['dom', 'svg', 'new']
    },
    {
      name: 'bubbleChart',
      type: ['canvas', 'new']
    },
    {
      name: 'imageCrop',
      type: ['dom', 'canvas', 'new']
    },
  ],
  effect: [
    {
      name: 'wave',
      type: ['canvas']
    },
  ],
  character: [
    {
      name: 'chunSik',
      type: ['dom']
    },
  ],
  webgl: [
    {
      name: 'webGL',
      type: ['canvas']
    },
    {
      name: 'treejs',
      type: ['canvas']
    },
  ],
};


const Index = () => {

  const getMenuEl = () => {
    return titles.map(title => {
      const menuEl = menu[title]?.map(({ name, type }) =>
        <li>
          <Link href={`/${name}`}>
            <a className={cx('contents')}>
              {name}
              {type.map((d) => <i className={cx(d)}>{d}</i>)}
            </a>
          </Link>
        </li>
      );

      return (
        <>
          <h1 className={cx('title')}>{title}</h1>
          <ul>
            {menuEl}
          </ul>
          <hr />
        </>
      )
    })
  }

  return (
    <div className={cx('wrap')}>
      {getMenuEl()}
    </div>
  )
};

export default Index;
