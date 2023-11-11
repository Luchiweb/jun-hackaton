import React, { useEffect, useState } from 'react';
import s from './Field.module.scss';
import Card from '../../Card/Card';
import { generateCards } from '../../../helpers/cards';

const Field = () => {

  const [cards, setCards] = useState(generateCards());
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  useEffect(() => {
    if (flippedCount === 2) {
      const [firstIndex, secondIndex] = flippedIndexes;
      const newCards = [...cards];

      if (newCards[firstIndex].symbol === newCards[secondIndex].symbol) {
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
      }

      setTimeout(() => {
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;

        setCards(newCards);
        setFlippedCount(0);
        setFlippedIndexes([]);
      }, 1000);
    }
  }, [flippedCount, flippedIndexes, cards]);

  const handleCardClick = (index) => {
    if (flippedCount < 2 && !cards[index].isFlipped && !cards[index].isMatched) {
      const newCards = [...cards];
      newCards[index].isFlipped = true;

      setCards(newCards);
      setFlippedCount(flippedCount + 1);
      setFlippedIndexes([...flippedIndexes, index]);
    }
  };

  return (
    <div className={s.field}>
      {cards.map((card, index) => (
        <Card key={index} card={card} onCardClick={() => handleCardClick(index)} />
      ))}
    </div>
  );
};

export default Field;
