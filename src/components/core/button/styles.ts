import { tv } from 'tailwind-variants';

export const styles = tv({
  variants: {
    disabled: {
      true: {
        wrapper: 'bg-app-150 text-app-600 pointer-events-none',
      },
      false: {
        wrapper: 'bg-app-500 text-app-150 pointer-events-auto',
      },
    },
    variant: {
      outline: {
        wrapper: 'border-app-150 border-2 bg-transparent text-app-650'
      }
    }
  },
  slots: {
    wrapper: 'font-guy h-12 rounded-lg text-lg w-full flex items-center justify-center',
  },
  defaultVariants: {
    disabled: false,
  },
});
