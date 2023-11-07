import { tv } from 'tailwind-variants';

export const styles = tv({
  variants: {
    active: {
      true: {
        item: 'text-app-300',
      },
      false: {
        item: 'text-app-600',
      },
    },
  },
  slots: {
    wrapper: 'h-[90px] rounded-t-xl p-4 gap-2 overflow-hidden fixed bottom-0 right-0 flex w-full bg-app-200',
    tooltip: 'w-2 rounded-full bottom-1 bg-app-300 h-2 absolute',
    item: 'flex outline-none rounded-lg bg-app-150 border-2 border-transparent transition duration-150 focus:border-app-300 items-center w-full justify-center relative',
  },
});
