import React, { useState } from 'react';
import s from './Modal.module.scss';
import Button from '../Button/Button';

const Modal = ({ closeModal, moves, timer, restartGame }) => {
  const [name, setName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const saveResult = () => {
    alert(`Сохранен результат: ${name}`);
    setName('');
    setIsSaved(true);
  };

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <img src="/win.png" alt="" />
        <div className={s.info}>
          <p>
            Ходы: <span>{moves}</span>
          </p>
          <p>
            Время: <span>{timer}s</span>
          </p>
        </div>
        <div>
          <h2>Занеси свой успех в таблицу лидеров</h2>
          <div className={s.form}>
            <input
              value={name}
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Иван Иванов"
              className={s.textInput}
            />
            <Button
              label="Сохранить"
              height="35px"
              width="30%"
              onClick={saveResult}
              disabled={isSaved}
            />
          </div>
        </div>
        <Button
          label="Играть снова!"
          height="35px"
          width="100%"
          onClick={restartGame}
        />
        <span className={s.close} onClick={closeModal}>
          x
        </span>
      </div>
    </div>
  );
};

export default Modal;
