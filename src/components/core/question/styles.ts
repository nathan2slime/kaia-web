import { tv } from 'tailwind-variants';

export const styles = tv({
  variants: {
    color: {
      wrong: {
        answer: 'bg-app-400',
      },
      success: {
        answer: 'bg-app-500',
      },
      default: {
        answer: 'bg-app-300',
      },
    },
    answered: {
      true: {
        answers: 'pointer-events-none',
      },
      false: {
        answers: 'pointer-events-auto',
      },
    },
  },
  slots: {
    wrapper: 'w-full flex flex-col',
    step: 'text-app-500',
    modal: 'm-4 flex justify-center flex-col items-center rounded-md max-w-sm w-[300px] h-[300px]',
    answer:
      'flex  text-app-100 font-guy p-4 justify-start items-center rounded-md',
    answers: 'flex flex-col gap-2',
    timer: 'flex justify-between w-full items-center',
    steps: 'font-guy mt-2 text-app-300',
    points: 'font-guy mt-2 text-app-400 text-xl',
    thanks: 'font-guy mt-8 text-app-300 text-2xl',
    title: 'font-guy text-app-600 text-lg my-8',
  },

  defaultVariants: {
    color: 'default',
  },
});
