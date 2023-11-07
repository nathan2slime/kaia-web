'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent } from 'react';

import { animations } from '@/global/animations';

import { ModalProps } from './model';
import { styles } from './styles';

export const Modal = (props: ModalProps) => {
  const { open, children, full, fixed, onNathClose, className } = props;

  const style = styles({ fixed, open, full });

  const onClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
    !fixed && e.target === e.currentTarget && onNathClose && onNathClose();

  return (
    <AnimatePresence mode="sync">
      {open && (
        <div
          {...props}
          className={style.overlay({ className })}
          onClick={onClick}
          {...animations.modal.overlay}
        >
          <motion.div
            className={style.content({ className })}
            {...animations.modal.content}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
