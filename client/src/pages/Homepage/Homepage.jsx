import React from 'react';
import s from './Homepage.module.scss';
import Field from '../../components/Field/Field';
import GameInfo from '../../components/GameInfo/GameInfo';
import Leaderboard from '../../components/Leaderboard/Leaderboard';

const Homepage = () => {
  return (
    <div className={s.homepage}>
      {/* <Head /> */}
      <div className={s.game}>
        <GameInfo />
        <Field />
      </div>
      <Leaderboard />
    </div>
  );
};

export default Homepage;
