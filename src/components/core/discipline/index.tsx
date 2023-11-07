import Link from 'next/link';
import Image from 'next/image';

import { ChevronRight } from 'lucide-react';

import { DisciplineProps } from './model';
import { styles } from './styles';

export const Discipline = ({ icon, title, type }: DisciplineProps) => {
  const style = styles();

  return (
    <Link href={'/quiz/' + type.toLowerCase()} className={style.wrapper()}>
      <div className={style.header()}>
        <div className={style.box()}>
          <Image
            src={'/assets/svgs/' + icon + '.svg'}
            alt={title}
            className={style.icon()}
            width={40}
            height={40}
          />
        </div>

        {title}
      </div>

      <ChevronRight className={style.arrow()} />
    </Link>
  );
};
