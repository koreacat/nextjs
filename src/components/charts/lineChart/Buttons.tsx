import classnames from 'classnames/bind';
import styles from './lineChart.module.scss';

const cx = classnames.bind(styles);

interface ButtonsProps {
  slideIndex: number;
  setSlideIndex: (slideIndex: number) => void;
  maxRow: number;
  viewCount: number;
}

const Buttons = ({ slideIndex, setSlideIndex, viewCount, maxRow }: ButtonsProps) => {
  const isOver = viewCount < maxRow;
  const prevBtnVisible = isOver && slideIndex !== 0;
  const nextBtnVisible = isOver && slideIndex < maxRow - viewCount;

  return (
    <>
      {prevBtnVisible && (
        <a className={cx('btn', 'left')} onClick={() => setSlideIndex(slideIndex - 1)} role="button" />
      )}
      {nextBtnVisible && (
        <a className={cx('btn', 'right')} onClick={() => setSlideIndex(slideIndex + 1)} role="button" />
      )}
    </>
  );
};

export default Buttons;
