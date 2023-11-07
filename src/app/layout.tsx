import classNames from 'classnames';

import type { Metadata } from 'next';
import { M_PLUS_1_Code, Luckiest_Guy } from 'next/font/google';

import { Root } from '@/components/layouts/root';

import { AppChildren } from '@/types';

import '@/global/styles.scss';

const plusCode = M_PLUS_1_Code({ subsets: ['latin'], variable: '--app-code' });
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--app-guy',
});

export const metadata: Metadata = {
  title: 'Kaia',
  description: 'App Quiz',
};

const AppLayout = ({ children }: AppChildren) => (
  <html lang="pt-BR" suppressHydrationWarning>
    <body className={classNames(plusCode.variable, luckiestGuy.variable)}>
      <Root>{children}</Root>
    </body>
  </html>
);

export default AppLayout;
