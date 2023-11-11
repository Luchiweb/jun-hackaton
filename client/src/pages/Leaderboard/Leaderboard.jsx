import React from 'react';

import s from './Leaderboard.module.scss';

const Leaderboard = () => {
  const leaderboardData = [
    { username: 'Player1', moves: 15, time: '02:30' },
    { username: 'Player2', moves: 18, time: '03:10' },
    { username: 'Player3', moves: 12, time: '01:45' },
  ];

  return (
    <div className={s.container}>
      <div className="">
        <h2>Твой рекорд</h2>
        <div className={s.record}>
          <div className="">
            Ходы: <span>10</span>
          </div>
          <div className="">
            Время: <span>16s</span>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Топ игроки</h2>
        <table>
          <thead>
            <tr>
              <th>Никнейм</th>
              <th>Ходы</th>
              <th>Время</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((record, index) => (
              <tr key={index}>
                <td>{record.username}</td>
                <td>{record.moves}</td>
                <td>{record.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
