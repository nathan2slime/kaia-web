'use client';

import { useEffect, useState } from 'react';

import { getRanking } from '@/services/ranking.services';
import { QuizType } from '@/types/quiz.types';

import { styles } from './styles';

const Ranking = () => {
  const [data, setData] = useState<QuizType[]>([]);

  useEffect(() => {
    getRanking().then(res => setData(res.data));
  }, []);

  const style = styles();

  return (
    <div className={style.wrapper()}>
      {
        <table className={style.table()}>
          <thead className={style.thead()}>
            <th className={style.th()}>Ranking</th>
            <th className={style.th()}>Apelido</th>
            <th className={style.th()}>Pontos</th>
          </thead>
          <tbody>
            {data.map(({ username, points }, index) => {
              const td = styles().td();

              return (
                <tr key={index}>
                  <td className={td}>{index + 1}</td>
                  <td className={td}>{username}</td>
                  <td className={td}>{points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Ranking;
