import Link from "next/link";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { Fragment } from "react";

const cx = classnames.bind(styles);

const titles = ['page', 'components', 'effect', 'character', 'webgl', 'threejs'];

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
      type: ['dom']
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
      type: ['canvas']
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
  ],
  threejs: [
    {
      name: 'solarSystem',
      type: ['canvas', 'new']
    },
  ]
};


const Index = () => {

  const getMenuEl = () => {
    return titles.map(title => {
      const menuEl = menu[title]?.map(({ name, type }) =>
        <li key={name}>
          <Link href={`/${name}`}>
            <a className={cx('contents')}>
              {name}
              {type.map((d) => <i key={d} className={cx(d)}>{d}</i>)}
            </a>
          </Link>
        </li>
      );

      return (
        <Fragment key={title}>
          <h1 className={cx('title')}>{title}</h1>
          <ul>
            {menuEl}
          </ul>
          <hr />
        </Fragment>
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
