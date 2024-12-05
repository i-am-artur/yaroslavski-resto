import { card } from './recipes/wrappers/cards';
// import { h1 } from './recipes/wrappers/typography/headings';
import { tokens } from './tokens';
import { utilities } from './utilities';
import { globalCss } from './globalStyles';
import { button } from './recipes/button';

export const config = {
  // minify: true,
  jsxFramework: 'react',
  eject: true,
  // presets: [myPreset],

  // Whether to use css reset
  // preflight: true,

  // Where to look for your css declarations
  // include: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  // Files to exclude
  exclude: [],

  globalCss,
  utilities,
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      tokens,
      recipes: {
        card,
        button,
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
};
