import { ChartData } from '@v2Components/phs/pst/results/result/gradeInfo/gradeChart';
import { Level, LevelType } from '@v2Domain/constant/levelType';
import { Grade, GradeType } from '@v2Domain/constant/gradeType';
import classnames from 'classnames/bind';
import styles from '@v2Components/phs/pst/results/result/gradeInfo/gradeInfo.module.scss';
import { ReactElement } from 'react';

const cx = classnames.bind(styles);

export interface GradeContents {
  grade: string;
  gradeDesc: string;
  desc: string | ReactElement;
}

export const ColumnCount = 7;
export const chartDataMap: Record<LevelType, ChartData[]> = {
  [Level.BASIC]: [
    {
      name: Grade.TRY_AGAIN,
      value: 1,
    },
    {
      name: Grade.BASIC_LOW,
      value: 1,
    },
    {
      name: Grade.BASIC_HIGH,
      value: 1,
    },
  ],
  [Level.INTERMEDIATE]: [
    {
      name: Grade.TRY_AGAIN,
      value: 1,
    },
    {
      name: Grade.INTERMEDIATE_LOW,
      value: 2,
    },
    {
      name: Grade.INTERMEDIATE_MID,
      value: 1,
    },
    {
      name: Grade.INTERMEDIATE_HIGH,
      value: 1,
    },
  ],
  [Level.ADVANCED]: [
    {
      name: Grade.TRY_AGAIN,
      value: 1,
    },
    {
      name: Grade.ADVANCED_LOW,
      value: 2,
    },
    {
      name: Grade.ADVANCED_MID,
      value: 2,
    },
    {
      name: Grade.ADVANCED_HIGH,
      value: 1,
    },
  ],
};
export const gradeContentsMap: Record<GradeType, GradeContents> = {
  ADVANCED_HIGH: {
    grade: 'Advanced High',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: <>개발 구현 능력 검사에서 달성할 수 있는 최고 등급을 달성하셨습니다. 나와 잘 맞는 기업과 매칭해보세요.</>,
  },
  ADVANCED_MID: {
    grade: 'Advanced Mid',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        더 높은 등급을 달성하기 위해 <em className={cx('grade')}>Advanced</em> 난이도 검사를 재응시해보세요.
      </>
    ),
  },
  ADVANCED_LOW: {
    grade: 'Advanced Low',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        더 높은 등급을 달성하기 위해 <em className={cx('grade')}>Advanced</em> 난이도 검사를 재응시해보세요.
      </>
    ),
  },
  INTERMEDIATE_HIGH: {
    grade: 'Intermediate High',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        더 높은 등급을 달성하기 위해 <em className={cx('grade')}>Advanced</em> 난이도 검사에 도전해 보세요.
      </>
    ),
  },
  INTERMEDIATE_MID: {
    grade: 'Intermediate Mid',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        더 높은 등급을 달성하기 위해 <em className={cx('grade')}>Intermediate</em> 난이도 검사를 재응시해보세요.
      </>
    ),
  },
  INTERMEDIATE_LOW: {
    grade: 'Intermediate Low',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        문제가 어려우셨다면 <em className={cx('grade')}>Basic</em> 난이도 검사에 도전해 보세요.
      </>
    ),
  },
  BASIC_HIGH: {
    grade: 'Basic High',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        더 높은 등급을 달성하기 위해 <em className={cx('grade')}>Intermediate</em> 난이도 검사에 도전해 보세요.
      </>
    ),
  },
  BASIC_LOW: {
    grade: 'Basic Low',
    gradeDesc: '등급을 달성하셨습니다.',
    desc: (
      <>
        더 높은 등급을 달성하기 위해 <em className={cx('grade')}>Basic</em> 난이도 검사를 재응시해보세요.
      </>
    ),
  },
  TRY_AGAIN: {
    grade: 'Try again',
    gradeDesc: '등급을 받으셨습니다.',
    desc: <>낮은 난이도 검사를 응시하시거나 튜토리얼을 통해 연습 후 재응시해 보세요.</>,
  },
};
