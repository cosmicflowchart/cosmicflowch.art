const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
    },
    extend: {
      colors: {
        'cfc-purple': {
          50: 'hsl(288, 100%, 98%)',
          100: 'hsl(288, 100%, 95%)',
          200: 'hsl(288, 100%, 90%)',
          300: 'hsl(288, 100%, 83%)',
          400: 'hsl(288, 100%, 75%)',
          500: 'hsl(288, 100%, 65%)',
          600: 'hsl(288, 100%, 56%)',
          700: 'hsl(288, 100%, 45%)',
          800: 'hsl(288, 100%, 35%)',
          900: 'hsl(288, 100%, 27%)',
          950: 'hsl(288, 100%, 17%)',
        }
      },
      fontFamily: {
        'elliptica': ['Elliptica'],
        'exo2': ['Exo2'],
        'sans': ['Exo2', ...defaultTheme.fontFamily.sans],
        'potra': ['Potra'],
      }
    },
  },
  plugins: [],
}

