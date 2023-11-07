import Image from 'next/image';
import { Check } from 'lucide-react';

import { AvatarProps } from './model';
import { styles } from './styles';

export const Avatar = ({ name, avatar, active }: AvatarProps) => {
  const style = styles({ active });

  return (
    <button className={style.wrapper()}>
      <div className={style.active()}>
        <Check />
      </div>

      <Image
        className={style.avatar()}
        alt={name || 'avatar'}
        src={avatar}
        width={40}
        height={40}
      />
    </button>
  );
};
