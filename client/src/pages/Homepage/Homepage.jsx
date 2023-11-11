import React from 'react';
import s from './Homepage.module.scss';
import Head from '../../components/Head/Head';
import Field from '../../components/Field/Field';
import GameInfo from '../../components/GameInfo/GameInfo';

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <Head />
      <Field />
      <GameInfo />
    </div>
  );
};

export default Homepage;
