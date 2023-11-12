import React, { useState, useEffect } from 'react';

import s from './Leaderboard.module.scss';

const Leaderboard = () => {
  // const leaderboardData = [
  //   { username: 'Player1', movesCount: 15 },
  //   { username: 'Player2', movesCount: 18 },
  //   { username: 'Player3', movesCount: 12 },
  //   // { username: 'Player4', movesCount: 20 },
  //   // { username: 'Player5', movesCount: 11 },
  //   // { username: 'Player6', movesCount: 9 },
  //   // { username: 'Player3', movesCount: 12 },
  //   // { username: 'Player4', movesCount: 20 },
  //   // { username: 'Player5', movesCount: 11 },
  //   // { username: 'Player6', movesCount: 9 },
  //   // { username: 'Player3', movesCount: 12 },
  //   // { username: 'Player4', movesCount: 20 },
  //   // { username: 'Player5', movesCount: 11 },
  //   // { username: 'Player6', movesCount: 9 },
  // ];

  const [leaderList, setLeaderList] = useState([]);
  //const [isLeaderListLoading, setIsLeaderListLoading] = useState(false);
  const [isLeaderListLoading, setIsLeaderListLoading] = useState(true);
  const [leaderListLoadingError, setLeaderListLoadingError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLeaderListLoading(true);
      try {
        const res = await fetch(`/api/bestScores`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data);

        if (data.success === false) {
          setIsLeaderListLoading(false);
          setLeaderListLoadingError(data.message);
        }

        setIsLeaderListLoading(false);
        setLeaderList(data);
      } catch (err) {
        setIsLeaderListLoading(false);
        setLeaderListLoadingError(err);
      }
    };

    fetchEvents();
  }, []);

  leaderList.sort(
    (a, b) => parseFloat(b.movesCount) - parseFloat(a.movesCount),
  );

  return (
    <>
      {!isLeaderListLoading && !leaderListLoadingError && (
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
                  {leaderList.map((record, index) => (
                    <tr key={index}>
                      <td>{record.username}</td>
                      <td>{record.movesCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {leaderListLoadingError && (
              <span className={s.error}>Ошибка получения данных с сервера</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Leaderboard;
