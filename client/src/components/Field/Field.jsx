import React from 'react';
import s from './Field.module.scss';
import Card from '../Card/Card';


const Field = ({ cards, handleCardClick }) => {

  return (
    <div className={s.field}>
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onCardClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default Field;
