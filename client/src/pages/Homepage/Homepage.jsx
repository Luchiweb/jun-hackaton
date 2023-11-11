import React from 'react';

import Head from '../../components/Head/Head';
import Game from '../../components/Game/Game';

import s from './Homepage.module.scss';

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <Head />
      <Game />
    </div>
  );
};

export default Homepage;
