import styles from './cards.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Cards = () => {
  return (
    <div className={cx('cardsArea')}>
      <div className={cx('cards')}>
        <img className={cx('card', 'card1')} src="/nextjs/img/cards/imgCard.png"/>
        <img className={cx('card', 'card2')} src="/nextjs/img/cards/imgCard.png"/>
        <img className={cx('card', 'card3')} src="/nextjs/img/cards/imgCard.png"/>
      </div>
    </div>
  )
};

export default Cards;
