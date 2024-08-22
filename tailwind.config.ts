import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      screens: {
        xl: '1200px',
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
