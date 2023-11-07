import { tv } from 'tailwind-variants';

export const styles = tv({
  variants: {
    open: {
      true: {
        overlay: 'opacity-100 pointer-events-auto',
      },
      false: {
        overlay: 'pointer-events-none opacity-0',
      },
    },
    fixed: {
      true: {
        overlay: 'fixed',
      },
      false: {
        overlay: 'absolute',
      },
    },
    full: {
      true: {
        content: 'w-full h-full rounded-none',
        overlay: 'p-0 backdrop-blur-none bg-transparent',
      },
      false: {
        overlay: 'backdrop-blur-none bg-transparent'
      },
    },
  },
  slots: {
    overlay:
      'top-0 left-0 z-10 p-3 w-screen flex justify-center items-center h-screen backdrop-blur-sm bg-blur-200',
    content:
      'w-fit h-fit relative bg-app-750 rounded-lg overflow-hidden',
  },
  defaultVariants: {
    fixed: true,
  },
});
