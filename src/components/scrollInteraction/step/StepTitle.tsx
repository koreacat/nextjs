import React from 'react';
import classnames from 'classnames/bind';
import styles from './step.module.scss';

const cx = classnames.bind(styles);

const StepTitle = () => {
  return (
    <span className={cx('stepTitle')}>
      STEP{' '}
      <span className={cx('countArea')}>
        <span className={cx('countWrap')}>
          <span className={cx('count', 'type1')}>ONE</span>
          <span className={cx('count', 'type2')}>TWO</span>
          <span className={cx('count', 'type3')}>THREE</span>
          <span className={cx('count', 'type1')}>ONE</span>
        </span>
      </span>
      <br />
      준비완료!
    </span>
  );
};

export default StepTitle;
