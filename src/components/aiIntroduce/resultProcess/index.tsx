import RoundedLineChart from "src/components/charts/roundedLineChart";
import classnames from "classnames/bind";
import styles from "./resultProcess.module.scss";

const cx = classnames.bind(styles);

const ResultProcess = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('chartWrap')}>
        <RoundedLineChart/>
      </div>
      <div className={cx('textWrap')}>
        <div className={cx('titleWrap')}>
          <span>결과만이 아닌</span>
          <span className={cx('em')}>과정까지.</span>
        </div>
        <div className={cx('descWrap')}>
          <span className={cx('highlight')}>난이도 적응 패턴</span>
          <div className={cx('desc')}>
            <span>AI역량검사는 결과뿐만 아니라</span>
            <span>과정도 중요하게 생각해요.</span>
            <span>응시 과정에서 보이는 행동 분석을 통해</span>
            <span>난이도 적응 패턴, 집중력, 의사 결정 유형 등</span>
          </div>
          <span className={cx('bold')}>“나만의 다채로운 성향을 보여줄 수 있어요.”</span>
        </div>
      </div>
    </div>
  )
}

export default ResultProcess;
