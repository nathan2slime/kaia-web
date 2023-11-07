import toast from 'react-hot-toast';

import { Auth, LoginInput, User } from '@/types/auth.types';
import { proxyAuthState } from '@/store/auth.state';
import { keys } from '@/utils/storage';
import { api } from '@/api';

export const loginService = async (payload: LoginInput) => {
  const { data } = await api.post('/login', payload);

  if (data) {
    if (data.error) {
      toast.error('Você não vai passar');

      return;
    }

    return data as Auth;
  }
};

export const signupService = async (payload: LoginInput) => {
  const { data } = await api.post('/signup', payload);

  if (data) {
    if (data.error) {
      toast.error('Esse apelido já existe');

      return;
    }

    return data as Auth;
  }
};

export const logoutService = () => {
  proxyAuthState.data = undefined;
  proxyAuthState.logged = false;
  localStorage.removeItem(keys.auth);
};

export const authService = async (token: string) => {
  const { data } = await api.get('/auth', {
    headers: {
      Authorization: token,
    },
  });

  if (data && data.error) return;
  if (data) return data as User;
};
