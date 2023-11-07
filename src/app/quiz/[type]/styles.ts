import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    header: 'flex items-center justify-between mb-4 w-full',
    title: 'text-2xl text-app-600 font-guy',
    back: 'text-app-600',
    wrapper: 'flex flex-col justify-center items-center p-6',
  },
});
