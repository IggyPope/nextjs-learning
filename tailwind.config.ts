import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textColor: {
      primary: '#161616',
      secondary: '#7a7a7a',
    },
    backgroundColor: {
      primary: '#fbfbfb',
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          color: theme('textColor.primary'),
          backgroundColor: theme('backgroundColor.primary'),
        },
      });
    }),
  ],
};

export default config;
