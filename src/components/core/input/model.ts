import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputProps = {
  message?: string;
  type?: 'text' | 'password';
  maxLength?: number;
  value?: string;
  name?: string;
  onUltChange: (value: string) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
