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
  },
  slots: {
    answer:
      'flex  text-app-100 font-guy p-4 justify-start items-center rounded-md',
  },

  defaultVariants: {
    color: 'default',
  },
});
