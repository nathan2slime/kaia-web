import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'w-full rounded-2xl bg-app-350 h-3 overflow-hidden',
    bar: 'w-full transition-all duration-150 bg-app-300 h-full max-w-[40%]',
  },
});
