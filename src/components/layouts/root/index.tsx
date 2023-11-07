import { Toaster } from 'react-hot-toast';

import { AuthProvider } from '@/components/providers/auth';
import { Tab } from '@/components/core/tab';

import { AppChildren } from '@/types';

import { styles } from './styles';

export const Root = ({ children }: AppChildren) => {
  const style = styles();

  return (
    <AuthProvider>
      <div className={style.wrapper()}>
        <div className={style.page()}>{children}</div>

        <Toaster containerClassName={style.toast()} />

        <Tab />
      </div>
    </AuthProvider>
  );
};
