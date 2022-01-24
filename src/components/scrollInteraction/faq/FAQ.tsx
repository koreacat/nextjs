import React from 'react';
import FaqList from './FaqList';
import classnames from 'classnames/bind';
import styles from './faq.module.scss';

const cx = classnames.bind(styles);

const FAQ = () => {
  return (
    <div className={cx('faqArea')}>
      <div className={cx('faqInner')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <FaqList />
        <div className={cx('linkArea')}>
          <a
            href="https://dour-sweater-a18.notion.site/FAQ-07413a5bbe034f69b7627eff8e8be020"
            className={cx('link')}
            target="_blank"
            rel="noreferrer"
          >
            <span className={cx('linkText')}>아직 궁금증이 해결되지 않으셨다면?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
