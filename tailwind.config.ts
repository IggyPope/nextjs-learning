import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 2px 10px 0px rgba(22, 22, 22, 0.10)',
        card: '0px 0px 10px 0px rgba(22, 22, 22, 0.10)',
      },
      colors: {
        main: '#E33A6D',
        text: '#161616',
        subtext: '#7a7a7a',
        background: '#fbfbfb',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          color: theme('colors.text'),
          backgroundColor: theme('colors.background'),
        },
      });
    }),
  ],
};

export default config;
