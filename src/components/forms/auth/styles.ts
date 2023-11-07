import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper:
      'flex items-center gap-12 py-6 px-8 w-full h-full flex-col justify-between',
    title: 'text-2xl text-app-300 font-guy',
    router: 'font-code text-base text-app-600 font-medium underline text-right',
    header: 'fex flex-col w-full items-start',
    logo: 'w-[90px] pt-5',
    form: 'flex flex-col gap-4 w-full',
    avatar: 'flex items-center justify-center gap-3 mb-5',
    footer: 'w-full mt-5 flex flex-col gap-4 items-end',
  },
});
