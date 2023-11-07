import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    page: 'h-[calc(100vh-90px)] w-full overflow-y-auto',
    toast: 'font-guy text-sm',
    wrapper:
      'flex flex-col bg-app-100 w-screen h-screen overflow-hidden items-center',
  },
});
