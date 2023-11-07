import { proxy } from 'valtio';

import { AuthState } from '@/types/auth.types';

export const proxyAuthState = proxy<AuthState>({
  logged: false,
  loading: true,
});
