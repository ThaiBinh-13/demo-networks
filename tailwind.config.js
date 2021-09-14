const breakpoints = require('./src/tailwind/breakpoints');
const colors = require('./src/tailwind/colors');

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{vue,md,js,ts,jsx,tsx}'],
  },
  darkMode: 'class',
  theme: {
    ...breakpoints,
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors,
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
    },
  },
};
