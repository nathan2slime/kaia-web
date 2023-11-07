'use client';

import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { useRouter } from 'next/navigation';

import { proxyAuthState } from '@/store/auth.state';
import { AppChildren } from '@/types';

export default ({ children }: AppChildren) => {
  const router = useRouter();
  const { data, logged } = useSnapshot(proxyAuthState);

  useEffect(() => {
    if (data && logged) router.push('/');
  }, [data, logged]);

  return <>{children}</>;
};
