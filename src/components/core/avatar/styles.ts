import { tv } from 'tailwind-variants';

export const styles = tv({
  variants: {
    active: {
      true: {
        wrapper: 'bg-app-550',
      },
      false: {
        active: 'hidden',
        wrapper: 'bg-app-150',
      },
    },
  },
  slots: {
    wrapper: 'flex justify-center relative rounded-full p-3',
    avatar: 'w-[50px] h-[50px]',
    active:
      'absolute text-app-500 text-sm -bottom-1 -left-1 bg-app-150 rounded-full p-1',
  },
  defaultVariants: {
    active: false,
  },
});
