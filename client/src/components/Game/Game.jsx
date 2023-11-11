import React, { useEffect, useState } from 'react';
import Field from '../Field/Field';
import GameInfo from '../GameInfo/GameInfo';
import { generateCards } from '../../helpers/cards';


const Game = () => {
    const [cards, setCards] = useState(generateCards());
    const [flippedCount, setFlippedCount] = useState(0);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (flippedCount === 2) {
            const [firstIndex, secondIndex] = flippedIndexes;
            const newCards = [...cards];

            if (newCards[firstIndex].path === newCards[secondIndex].path) {
                newCards[firstIndex].isMatched = true;
                newCards[secondIndex].isMatched = true;
            }

            setTimeout(() => {
                setCards(prevCards => {
                    const updatedCards = [...prevCards];
                    updatedCards[firstIndex].isFlipped = false;
                    updatedCards[secondIndex].isFlipped = false;

                    return updatedCards;
                });

                setFlippedCount(0);
                setFlippedIndexes([]);


                if (newCards.every((card) => card.isMatched)) {
                    setGameOver(true);
                }
            }, 1000);
        }
    }, [flippedCount, flippedIndexes, cards]);

    const handleCardClick = (index) => {
        if (gameOver) {
            return;
        }

        if (flippedCount < 2 && !cards[index].isFlipped && !cards[index].isMatched) {
            const newCards = [...cards];
            newCards[index].isFlipped = true;

            setCards(newCards);
            setFlippedCount((prevCount) => prevCount + 1);
            setFlippedIndexes([...flippedIndexes, index]);

            if (flippedCount === 0) {
                setMoves((prevMoves) => prevMoves + 1);
            }
        }
    };

    const restartGame = () => {
        setCards(generateCards());
        setFlippedCount(0);
        setFlippedIndexes([]);
        setMoves(0);
        setGameOver(false);
        setTimer(0);
    };

    return (
        <div>
            <Field cards={cards} handleCardClick={handleCardClick} />
            <GameInfo moves={moves} timer={timer} setTimer={setTimer} restartGame={restartGame} gameOver={gameOver} />
        </div>
    );
};

export default Game;