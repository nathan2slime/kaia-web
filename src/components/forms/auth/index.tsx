'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { Input } from '@/components/core/input';
import { Button } from '@/components/core/button';
import { Avatar } from '@/components/core/avatar';

import { loginService, signupService } from '@/services/auth.services';
import { proxyAuthState } from '@/store/auth.state';
import { keys, saveStorage } from '@/utils/storage';

import { AuthFormProps } from './model';
import { styles } from './styles';

const schema = yup.object().shape({
  avatar: yup.string().default('turtle'),
  username: yup.string().required(),
  password: yup.string().required(),
});

const avatars = ['turtle', 'giraffe', 'lion', 'duck'];

export const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    watch,
    formState: { isValid },
    setValue,
  } = useForm({
    mode: 'all',
    defaultValues: {
      avatar: 'turtle',
    },
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const form = watch();
  const style = styles();
  

  const onLogin = async () => {
    setIsLoading(true);

    const data =
      type == 'login' ? await loginService(form) : await signupService(form);

    if (data) {
      proxyAuthState.logged = true;
      proxyAuthState.data = data;

      saveStorage(keys.auth, data);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={e => e.preventDefault()} className={style.wrapper()}>
      <div className={style.header()}>
        <Image
          src="/assets/svgs/bear.svg"
          width={40}
          height={40}
          alt="Kaia"
          className={style.logo()}
          priority
          loading="eager"
        />

        <h2 className={style.title()}>
          {type == 'login' ? 'Entre na sua conta' : 'Criar conta'}
        </h2>
      </div>

      <div className={style.form()}>
        {type == 'signup' && (
          <div className={style.avatar()}>
            {avatars.map(avatar => (
              <div key={avatar} onClick={() => setValue('avatar', avatar)}>
                <Avatar
                  active={avatar == form.avatar}
                  avatar={'/assets/svgs/' + avatar + '.svg'}
                />
              </div>
            ))}
          </div>
        )}

        <Input
          placeholder="Apelido"
          value={form.username}
          name="username"
          autoComplete="username"
          onUltChange={e => setValue('username', e, { shouldValidate: true })}
        />

        <Input
          placeholder="Senha"
          type="password"
          name="password"
          autoComplete="current-password"
          value={form.password}
          onUltChange={e => setValue('password', e, { shouldValidate: true })}
        />
      </div>

      <div className={style.footer()}>
        <Button type="button" disabled={!isValid} onClick={onLogin}>
          {isLoading ? <BeatLoader size={10} color="white" /> : 'Continuar'}
        </Button>

        <Button
          onClick={() =>
            router.push(type == 'login' ? '/auth/signup' : '/auth/login')
          }
          variant="outline"
        >
          {type == 'signup' ? 'Já tenho uma conta' : 'Criar uma conta'}
        </Button>
      </div>
    </form>
  );
};
