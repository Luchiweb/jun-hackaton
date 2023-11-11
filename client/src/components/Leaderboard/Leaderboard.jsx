import React from 'react';

import s from './Leaderboard.module.scss';

const Leaderboard = () => {
  const leaderboardData = [
    { username: 'Player1', movesCount: 15 },
    { username: 'Player2', movesCount: 18 },
    { username: 'Player3', movesCount: 12 },
    { username: 'Player4', movesCount: 20 },
    { username: 'Player5', movesCount: 11 },
    { username: 'Player6', movesCount: 9 },
    { username: 'Player3', movesCount: 12 },
    { username: 'Player4', movesCount: 20 },
    { username: 'Player5', movesCount: 11 },
    { username: 'Player6', movesCount: 9 },
    { username: 'Player3', movesCount: 12 },
    { username: 'Player4', movesCount: 20 },
    { username: 'Player5', movesCount: 11 },
    { username: 'Player6', movesCount: 9 },
  ];

  leaderboardData.sort(
    (a, b) => parseFloat(b.movesCount) - parseFloat(a.movesCount),
  );

  return (
    <div className={s.container}>
      <div className={s.leaderboard}>
        <h2>Топ игроки</h2>
        <div className={s.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Никнейм</th>
                <th>Ходы</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((record, index) => (
                <tr key={index}>
                  <td>{record.username}</td>
                  <td>{record.movesCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
