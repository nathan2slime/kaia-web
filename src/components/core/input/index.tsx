'use client';

import { InputProps } from './model';
import { styles } from './styles';

export const Input = ({
  message,
  onUltChange,
  className,
  ...props
}: InputProps) => {
  const style = styles();

  return (
    <div className={style.wrapper({ className })}>
      <input
        {...props}
        className={style.field()}
        
        onChange={e => onUltChange(e.target.value)}
      />

      {message && <span>{message}</span>}
    </div>
  );
};
