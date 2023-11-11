import React from 'react';
import s from './Modal.module.scss';
import Button from '../Button/Button';

const Modal = ({ closeModal, moves, timer, restartGame }) => {
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
