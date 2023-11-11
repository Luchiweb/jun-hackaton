import React from 'react';
import s from './GameInfo.module.scss';
import Button from '../Button/Button';

const GameInfo = () => {
  return (
    <div className={s.info}>
      <span>Текущая игра:</span>
      <div className={s.panel}>
        <div className={s.meta}>
          <div className={s.time}>
            Времени осталось: <span>0:45</span>
          </div>
          <div className={s.turns}>
            Ходов сделано: <span>3</span>
          </div>
        </div>
        <Button
          label="Начать заново"
          onClick={() => {
            alert('start');
          }}
          width="200px"
          height="45px"
          type="button"
        />
      </div>
    </div>
  );
};

export default GameInfo;
