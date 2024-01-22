/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#0d0a0b',
        'luma-gray': '#141517',
        'luma-medium-gray': '#202325',
        'luma-light-gray': '#1c1e20',
        'spotify-green': '#1bd760',
        jean: '#2d4971',
        beaber: '#8b7867',
        rust: '#b55336',
        'dark-purple': '#2f131f',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(rgba(66, 144, 243, 0.2) 0%, rgba(239, 148, 225, 0.1) 50%, rgba(191, 124, 7, 0) 100%)',
      },
      fontFamily: {
        serif: ['Prestige Elite', ...defaultTheme.fontFamily.serif],
        display: ['Ziclets', 'ui-sans-serif', 'system-ui'],
        system: [
          '-apple-system',
          'system-ui',
          'Inter',
          'Roboto',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      width: {
        '3/10': '30%',
        '7/10': '70%',
      },
    },
  },
  plugins: [],
};
