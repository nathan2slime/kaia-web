import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'flex flex-col w-full h-full p-6',
    table: 'rounded-md overflow-hidden',
    thead: 'bg-app-300 w-full border-b border-app-100',
    td: 'h-12 bg-app-350 text-app-600 [&:not(:last-child)]:border-r-2 font-bold px-5 text-start font-code',
    th: 'text-start uppercase font-code [&:not(:last-child)]:border-r-2 border-app-100 px-5 py-3 text-app-150',
  },
});
