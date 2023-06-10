/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-green': '#136743',
        'sub-green': '#E8F3F5',
        'dusty-green': '#E7ECEB',
        'strong-black': '#171717',
        'dusty-black': '#484848',
        'dusty2-black': '#686868',
        'modal-black': '#757575',
        'normal-gray': '#BCBCBC',
        'dusty-gray': '#DEDEDE',
        'light-gray': '#ECECEC',
        'bright-gray': '#F7F7F7',
        'dusty-white': '#FDFDFD',
      },
    },
  },
  plugins: [],
};
