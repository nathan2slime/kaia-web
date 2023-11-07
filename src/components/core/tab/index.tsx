'use client';

import { UserCircle2, Swords, Trophy } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { styles } from './styles';

export const Tab = () => {
  const pathname = usePathname();

  const style = styles();

  const props = {
    width: 27,
    height: 27,
  };

  const data = [
    {
      path: ['/', '/auth/login', '/auth', '/quiz', '/auth/signup'],
      title: 'Quiz',
      icon: <Swords {...props} />,
    },
    {
      path: ['/ranking'],
      title: 'Ranking',
      icon: <Trophy {...props} />,
    },
    {
      path: ['/me'],
      title: 'Conta',
      icon: <UserCircle2 {...props} />,
    },
  ];

  return (
    <div className={style.wrapper()}>
      {data.map(({ path, icon }) => {
        const active = !!path.find(p =>
          p.length > 1 ? p == pathname : pathname.includes(p),
        );

        return (
          <Link
            href={path[0]}
            key={path[0]}
            className={styles({ active }).item()}
          >
            {icon}

            {active && <div className={style.tooltip()} />}
          </Link>
        );
      })}
    </div>
  );
};
