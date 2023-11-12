import React from 'react';

// import Head from '../../components/Head/Head';
import Game from '../../components/Game/Game';
import Leaderboard from '../../components/Leaderboard/Leaderboard';

import s from './Homepage.module.scss';

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <div className={s.game}>
        <Game />
      </div>
      <Leaderboard />
    </div>
  );
};

export default Homepage;
