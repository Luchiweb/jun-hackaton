import React from 'react';
import s from './Card.module.scss';

const Card = ({ card, onCardClick }) => {
  return <div
    className={s.card}
    onClick={onCardClick}
  >
    {card.isFlipped || card.isMatched ? card.symbol : '👀'}
  </div>
};

export default Card;
