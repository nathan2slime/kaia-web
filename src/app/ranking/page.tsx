import { getRanking } from '@/services/ranking.services';

import { styles } from './styles';

const Ranking = async () => {
  const { data } = await getRanking();

  const style = styles();

  return (
    <div className={style.wrapper()}>
      {data.length > 2 && (
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
      )}
    </div>
  );
};

export default Ranking;
