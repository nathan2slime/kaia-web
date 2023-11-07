import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper:
      'bg-app-950 p-5 h-[90px] flex justify-between items-center rounded-lg',
    arrow: 'text-app-600',
    box: 'p-3 bg-app-150 rounded-lg',
    icon: 'w-[30px] h-[30px]',
    header: 'flex gap-4 items-center font-code text-base font-semibold',
  },
});
