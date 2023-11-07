export type LoginInput = {
  username: string;
  password: string;
};

export type SignupInput = LoginInput & {
  avatar: string;
};

export type User = {
  username: string;
  id: number;
  avatar: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type Auth = {
  user: User;
  token: string;
};

export type AuthState = {
  logged: boolean;
  loading?: boolean;
  data?: Auth;
};
