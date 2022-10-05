import ResultCard from '@v2Components/phs/pst/results/result/common/resultCard';
import GradeChart, { ChartData, RowData } from '@v2Components/phs/pst/results/result/gradeInfo/gradeChart';
import {
  ColumnCount,
  chartDataMap,
  GradeContents,
  gradeContentsMap,
} from '@v2Components/phs/pst/results/result/gradeInfo/data';
import { Level, levelTextMap, LevelType } from '@v2Domain/constant/levelType';
import { gradeTextMap, GradeType } from '@v2Domain/constant/gradeType';
import { PstResultVO } from '@v2Domain/vo/phs/pst/result/PstResultVO';
import classnames from 'classnames/bind';
import styles from './gradeInfo.module.scss';
import Tooltip from '@v2Components/phs/pst/results/result/common/tooltip';

const cx = classnames.bind(styles);

interface AchievementGradeProps {
  level: LevelType;
  grade: GradeType;
}

const AchievementGrade = ({ level, grade }: AchievementGradeProps) => {
  const getGradeContentsMap = (): GradeContents => {
    // 예외 Basic 에서 TRY_AGAIN 을 받은 경우
    if (level === 'BASIC' && grade === 'TRY_AGAIN') {
      return {
        grade: 'Try again',
        gradeDesc: '등급을 받으셨습니다.',
        desc: <>튜토리얼을 통해 연습 후 재응시해 보세요.</>,
      };
    }

    return gradeContentsMap[grade];
  };

  const contents = getGradeContentsMap();

  if (!contents) return null;

  return (
    <>
      <p className={cx('title')}>
        <em className={cx('grade')}>{contents.grade}</em> {contents.gradeDesc}
      </p>
      <p className={cx('desc')}>{contents.desc}</p>
    </>
  );
};

const ToolTipContent = () => {
  return (
    <div className={cx('tooltipArea')}>
      <strong className={cx('tooltipTitle')}>달성 등급이란?</strong>
      <span className={cx('tooltipDesc')}>
        응시한 난이도와 채점 결과에 따라 특정 등급을 달성할 수<br />
        있습니다. 응시 난이도에 따라 달성할 수 있는 등급이 다르며,
        <br />
        높은 등급을 달성할수록 매칭 가능한 기업이 많아집니다.
      </span>
    </div>
  );
};

interface GradeInfoProps {
  pstResult: PstResultVO;
}

const GradeInfo = ({ pstResult }: GradeInfoProps) => {
  const { level, grade } = pstResult;

  const getRowData = (): RowData[] => {
    return (Object.keys(Level) as LevelType[]).map((levelType) => {
      return {
        name: levelTextMap[levelType],
        isOn: level === levelType,
      };
    });
  };

  const getChartDataArr = (): ChartData[][] => {
    return (Object.keys(Level) as LevelType[]).map((levelType) => {
      const chartData = chartDataMap[levelType];
      return chartData.map((data) => {
        return {
          ...data,
          name: gradeTextMap[data.name as GradeType],
          isOn: data.name === grade,
        };
      });
    });
  };

  return (
    <ResultCard title={'달성 등급'} iconType={'grade'} toolTip={<Tooltip content={<ToolTipContent />} />}>
      <div className={cx('gradeArea')}>
        {/* [D] 등급 차트 */}
        <div className={cx('cardInner')}>
          <div className={cx('chartArea')}>
            <div className={cx('columnText')}>
              개발구현
              <br />
              능력
            </div>
            <div className={cx('chartWrap')}>
              <GradeChart chartDataArr={getChartDataArr()} rowData={getRowData()} columnCount={ColumnCount} />
            </div>
            <div className={cx('arrow')}>응시 난이도</div>
          </div>
        </div>

        {/* [D] 등급 설명 */}
        <div className={cx('cardInner')}>
          <AchievementGrade level={level} grade={grade} />
        </div>
      </div>
    </ResultCard>
  );
};

export default GradeInfo;
