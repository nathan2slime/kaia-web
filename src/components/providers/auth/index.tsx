'use client';

import { useSnapshot } from 'valtio';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Splash } from '@/components/layouts/splash';

import { Auth } from '@/types/auth.types';
import { authService, logoutService } from '@/services/auth.services';
import { getStorage, keys } from '@/utils/storage';
import { proxyAuthState } from '@/store/auth.state';
import { AppChildren } from '@/types';

const protecteds = ['/', '/quiz'];

export const AuthProvider = ({ children }: AppChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  const { loading, data } = useSnapshot(proxyAuthState);

  useEffect(() => {
    onAuth();
  }, []);

  useEffect(() => {
    if (pathname.includes('/auth') || loading) return;

    const match = protecteds.includes(pathname)

    if (!loading && !data && match) router.push('/auth/login');
  }, [[pathname]]);

  const onAuth = async () => {
    const auth = getStorage<Auth>(keys.auth);

    if (auth) {
      proxyAuthState.data = auth;
      proxyAuthState.loading = false;

      const data = await authService(auth.token);

      if (data) {
        proxyAuthState.data = { token: auth.token, user: data };
        proxyAuthState.logged = true;

        return;
      }

      logoutService();

      return;
    }

    router.push('/auth/login');
    proxyAuthState.loading = false;
  };

  return <>{loading ? <Splash /> : children}</>;
};
