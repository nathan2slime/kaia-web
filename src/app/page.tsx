'use client';

import { useSnapshot } from 'valtio';

import { Avatar } from '@/components/core/avatar';
import { Discipline } from '@/components/core/discipline';
import { proxyAuthState } from '@/store/auth.state';

import { styles } from './styles';
import { disciplines } from './data';

const Index = () => {
  const { data } = useSnapshot(proxyAuthState);

  const style = styles();

  if (!data) return <></>;

  const { user } = data;

  return (
    data && (
      <div className={style.wrapper()}>
        <header className={style.header()}>
          <div className={style.title()}>
            <h1 className={style.user()}>Oi, {user.username}</h1>

            <p className={style.description()}>Boa noite</p>
          </div>

          <Avatar avatar={'/assets/svgs/' + user.avatar + '.svg'} />
        </header>

        <span className={style.helper()}>Selecione um Quiz</span>
        <div className={style.discipline()}>
          {disciplines.map(discipline => (
            <Discipline key={discipline.type} {...discipline} />
          ))}
        </div>
      </div>
    )
  );
};

export default Index;
