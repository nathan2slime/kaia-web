import { VariantProps } from 'tailwind-variants';
import { MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { AppChildren } from '@/types';

import { styles } from './styles';

export type ModalProps = {
  onNathClose: () => void;
} & VariantProps<typeof styles> &
  AppChildren &
  MotionProps &
  HTMLAttributes<HTMLElement>;
