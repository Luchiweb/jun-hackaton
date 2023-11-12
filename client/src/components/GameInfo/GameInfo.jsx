import React, { useEffect } from 'react';
import s from './GameInfo.module.scss';
import Button from '../Button/Button';

const GameInfo = ({ moves, restartGame, gameOver, timer, setTimer }) => {
  useEffect(() => {
    let intervalId;

    if (!gameOver) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);

  }, [gameOver]);

  return (
    <div className={s.info}>
      <div className={s.panel}>
        <Button
          label="Начать заново"
          onClick={restartGame}
          width="235px"
          height="45px"
          type="button"
        />
        <div className={s.meta}>
          <div className={s.time}>
            Времея игры: <span>{timer}s</span>
          </div>
          <div className={s.movesCount}>
            Ходов сделано: <span>{moves}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
