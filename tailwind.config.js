/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
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
        'effect-gray': '#FAFAFA',
        'dusty-white': '#FDFDFD',
        'dark-bg': '#121212',
        'dark-point': '#343439',
        'dark-spinner': '#3c3c43',
        'dark-main-green': '#70D66D',
      },
      fontFamily: {
        cambay: ['Cambay', 'sans-serif'],
        'nanum-myeongjo': ['Nanum Myeongjo', 'sans-serif'],
        'noto-sans': ['Noto Sans KR', 'sans-serif'],
      },
      screens: {
        '3xl': '1600px',
      },
      backgroundImage: {
        'hero-lg': "url('/image/hero-large.png')",
        'hero-md': "url('/image/hero-medium.png')",
        'hero-sm': "url('/image/hero-small.png')",
        'dark-hero-lg': "url('/image/dark-hero-large.png')",
        'dark-hero-md': "url('/image/dark-hero-medium.png')",
        'dark-hero-sm': "url('/image/dark-hero-small.png')",
      },
    },
  },
  plugins: [],
};
