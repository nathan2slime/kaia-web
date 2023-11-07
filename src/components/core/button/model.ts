import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { VariantProps } from 'tailwind-variants';

import { styles } from './styles';

export type ButtonProps = VariantProps<typeof styles> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
