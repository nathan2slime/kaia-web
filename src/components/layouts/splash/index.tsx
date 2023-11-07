import Image from 'next/image';
import { BeatLoader } from 'react-spinners';

import { styles } from './styles';

export const Splash = () => {
  const style = styles();

  return (
    <div className={style.wrapper()}>
      <Image
        src="/assets/svgs/bear.svg"
        width={40}
        height={40}
        alt="Kaia"
        className={style.logo()}
        priority
        loading="eager"
      />

      <BeatLoader color="#E97B2E" size={20} />
    </div>
  );
};
