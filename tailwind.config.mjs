/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#0d0a0b',
        'spotify-green': '#1bd760',
        jean: '#2d4971',
        beaber: '#8b7867',
        rust: '#b55336',
        'dark-purple': '#2f131f',
      },
      fontFamily: {
        serif: ['Prestige Elite', ...defaultTheme.fontFamily.serif],
        display: ['Ziclets', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
