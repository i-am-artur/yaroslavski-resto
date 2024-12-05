import { defineConfig } from '@pandacss/dev';
import { radius } from '@repo/shared/src/styles/js/vars/borders';
import { body, box, item, unit } from '@repo/shared/src/styles/js/vars/layouts';
import { config } from '@repo/shared/src/styles/panda/config';

export const appConfig = defineConfig({
  ...config,

  include: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
});

export default appConfig;

// export default const m = defineConfig({
//   jsxFramework: 'react',
//   eject: true,
//   // presets: [myPreset],

//   // Whether to use css reset
//   // preflight: true,

//   // Where to look for your css declarations
//   include: ['./app/**/*.{js,jsx,ts,tsx}'],
//   // Files to exclude
//   exclude: [],

//   utilities: {
//     color: {
//       values: 'colors',
//     },
//     rowGap: {
//       values: 'spacing',
//     },
//     columnGap: {
//       values: 'spacing',
//     },
//     borderRadius: {
//       values: 'radii',
//     },
//     padding: {
//       values: 'spacing',
//     },
//     margin: {
//       values: 'spacing',
//     },
//   },
//   // minify: true,
//   theme: {
//     extend: {
//       breakpoints: {
//         sm: '640px',
//         md: '768px',
//         lg: '1024px',
//         xl: '1280px',
//         '2xl': '1536px',
//       },
//       tokens: {
//         colors: {
//           primary: {
//             DEFAULT: { value: '#4A2626' },
//             text: { value: 'white' },
//           },
//           secondary: {
//             DEFAULT: { value: '#F1F2F4' },
//             text: { value: 'black' },
//           },
//         },
//         spacing: {
//           box: {
//             h: { value: box.gap.h + 'px' },
//             v: { value: box.gap.v + 'px' },
//           },
//           item: {
//             h: { value: item.gap.h + 'px' },
//             v: { value: item.gap.v + 'px' },
//           },
//           unit: {
//             h: { value: unit.gap.h + 'px' },
//             v: { value: unit.gap.v + 'px' },
//           },
//           side: {
//             h: { value: body.padding.h + 'px' },
//             v: { value: body.padding.v + 'px' },
//           },
//           sideDoubleReverse: {
//             h: { value: -2 * body.padding.h + 'px' },
//             v: { value: -2 * body.padding.v + 'px' },
//           },
//         },
//         radii: {
//           xl: { value: radius.xl + 'px' },
//           std: { value: radius.std + 'px' },
//         },
//       },
//     },
//   },

//   // The output directory for your css system
//   outdir: 'styled-system',
// });
