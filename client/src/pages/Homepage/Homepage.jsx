import React from 'react';
import Game from '../../components/Game/Game';
import s from './Homepage.module.scss';
import Leaderboard from '../../components/Leaderboard/Leaderboard';

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
