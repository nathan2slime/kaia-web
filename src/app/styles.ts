import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'flex flex-col justify-center items-center p-6',
    discipline: 'flex flex-col w-full h-full gap-4',
    description: 'font-code text-lg text-app-600 font-semibold',
    header: 'flex w-full items-center  justify-between pb-5 mb-7',
    user: 'text-2xl font-guy text-app-300',
    helper:
      'font-code text-base bg-app-150 rounded-lg p-2 font-semibold mb-3 block w-full text-app-300',
    title: 'flex flex-col justify-start items-start',
  },
});
