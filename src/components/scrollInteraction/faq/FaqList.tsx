import React, { useState, useCallback } from 'react';
import classnames from 'classnames/bind';
import styles from './faq.module.scss';

const cx = classnames.bind(styles);

const faqInfoList = [
  {
    category: '잡다매칭 서비스',
    question: '잡다매칭이 기존 취업 서비스와 다른 점은 무엇인가요?',
    answerTitle: '잡다매칭에서는 지원하지 않고도 면접 제안을 받을 수 있습니다.',
    answer:
      'AI가 구직자와 기업의 선호정보와 행동데이터를 학습하여 서로에게 최적의 상대를 추천하기 때문에 가능합니다. 더 이상 공고를 찾느라 애쓰지 않아도, 의미 없는 공고 추천에 헤매지 않아도 됩니다. 합격가능성까지 고려한 최적의 포지션을 AI가 상시로 추천해주는 플랫폼, 지원하지 않고도 먼저 면접 제안을 받을 수 있는 플랫폼, 잡다매칭으로 취업에 성공하세요!',
    type: 'type2',
  },
  {
    category: '잡다매칭 프로세스',
    question: '잡다매칭은 어떻게 진행되나요?',
    answerTitle: '간단합니다. 프로필 입력, 역검(AI역량검사) 응시, 선호 정보만 입력하면 준비 끝!',
    answer:
      'AI가 즉시 구직자에게는 선호에 맞고 합격가능성이 높은 포지션을, 기업에게는 해당 직무에 적합한 역량을 가진 인재를 추천합니다. 양자간 추천에 기반하여 구직자는 원클릭 지원, 기업은 원클릭 면접 제안으로 매칭이 진행됩니다.',
    type: 'type1',
  },
  {
    category: '잡다매칭 이용 관련',
    question: '신입이어도 면접 제안을 받을 수 있나요?',
    answerTitle: '네, 신입이어도 면접 제안을 받을 수 있습니다.',
    answer:
      '경력이 없어도 나의 잠재된 역량이 어필되기 때문에, 잡다에서는 포지션에 적합한 역량을 가진 인재라면 신입도 면접 제안을 받을 수 있습니다.',
    type: 'type1',
  },
  {
    category: '잡다매칭 이용 관련',
    question: '지원하지 않아도 면접 제안을 받을 수 있나요?',
    answerTitle: '네, 지원하지 않아도 면접 제안을 받을 수 있습니다.',
    answer:
      '기업이 포지션에 적합한 인재를 즉시 추천받기 때문에, 구직자의 입사 지원 여부와 상관없이 기업으로부터 먼저 면접 제안을 받을 수 있습니다.',
    type: 'type1',
  },
  {
    category: '잡다매칭 이용 관련',
    question: '프로필 한 번만 작성해도 여러 곳에 지원이 가능한 건가요?',
    answerTitle: '네, 한 번 등록해 놓은 프로필로 여러 포지션에 지원할 수 있습니다.',
    answer:
      '흔히 취준 과정에서 서류 전형에 가장 많은 시간과 노력을 쏟아붓는데요. 지원하는 기업마다 반복되는 지원서 작성, 잡다에서는 이제 필요 없습니다!',
    type: 'type1',
  },
];

interface IFaqProps {
  category: string;
  question: string;
  answerTitle: string;
  answer: string;
  type: string;
}

const Faq = ({ category, question, answerTitle, answer, type }: IFaqProps) => {
  const [isShow, setIsShow] = useState(false);

  const onClickFaq = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <li className={cx('listItem')}>
      <a className={cx('listTitle', { on: isShow })} role="button" onClick={onClickFaq}>
        <span className={cx('category')}>{category}</span>
        <em className={cx('question')}>{question}</em>
      </a>
      <div className={cx('answer', type, { on: isShow })}>
        <span className={cx('emphasis')}>{answerTitle}</span>
        {answer}
      </div>
    </li>
  );
};

const FaqList = () => {
  const faqList = faqInfoList.map((item, i) => {
    return (
      <Faq
        key={i}
        category={item.category}
        question={item.question}
        answerTitle={item.answerTitle}
        answer={item.answer}
        type={item.type}
      />
    );
  });

  return <ul className={cx('faqList')}>{faqList}</ul>;
};

export default FaqList;
