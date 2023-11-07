import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          100: '#FBF5EE',
          150: '#FFFFFF',
          200: '#FDFAF7',
          300: '#E97B2E',
          400: '#E15739',
          600: '#5D2004',
          950: '#F9E5CD',
          350: '#F6D4AD',
          650: '#876152',
          750: '#FFCA75',
          900: '#EB8944',
          700: '#3A98E0',
          500: '#579C6D',
          550: '#81C196',
        },
        blur: {
          100: '#FFF8E98F',
        },
      },
      fontFamily: {
        code: 'var(--app-code)',
        guy: 'var(--app-guy)',
      },
    },
  },
  plugins: [],
};

export default config;
