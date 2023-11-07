import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'flex flex-col gap-2 w-full',
    field:
      'outline-none text-lg font-code p-4 font-bold border-2 w-full text-app-600 focus:border-app-300 border-transparent bg-app-150 rounded-lg h-12',
  },
});
