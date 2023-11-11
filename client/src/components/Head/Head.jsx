import React from 'react';
import s from './Head.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const navigate = useNavigate();
  return (
    <div className={s.head}>
      <Button
        label="Вход"
        onClick={() => navigate('/login')}
        height="35px"
        width="50%"
      />
      <Button
        label="Регистрация"
        onClick={() => navigate('/register')}
        height="35px"
        width="50%"
      />
    </div>
  );
};

export default Head;
