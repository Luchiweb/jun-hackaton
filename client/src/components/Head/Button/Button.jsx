import React from 'react';
import s from './Button.module.scss';

const Button = ({ label, onClick, width, height, disabled, type }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{
        width: width,
        height: height,
      }}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
