import React from "react";
import classnames from "classnames/bind";
import styles from "./introduce.module.scss";
import dynamic from "next/dynamic";

const cx = classnames.bind(styles);

const Interaction = dynamic(() => import('./interaction'), {ssr: false});

const MaskInteraction = () => {

  return (
    <div className={cx('wrap')}>
      <div className={cx('mainArea')}>
        <Interaction/>
      </div>

    </div>
  )
};


export default MaskInteraction;
