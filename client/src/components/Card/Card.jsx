import React from 'react';
import s from './Card.module.scss';

const Card = ({ card, onCardClick }) => {
  return (
    <div className={`${s.card} ${card.isFlipped || card.isMatched ? s.flipped : ''} ${card.isMatched ? s.matched : ''}`} onClick={onCardClick}>
      <img src={card.isFlipped || card.isMatched ? card.path : '/bg.png'} alt="" />
    </div>
  );
};

export default Card;
