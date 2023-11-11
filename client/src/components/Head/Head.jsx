import React from 'react';
import s from './Head.module.scss';
import Button from './Button/Button';

const Head = () => {
  return (
    <div className={s.head}>
      <Button
        label="Вход"
        onClick={() => alert('nav to login')}
        height="45px"
        width="50%"
      />
      <Button
        label="Регистрация"
        onClick={() => alert('nav to register')}
        height="45px"
        width="50%"
      />
    </div>
  );
};

export default Head;
