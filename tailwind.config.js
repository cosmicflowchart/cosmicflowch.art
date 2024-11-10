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
          50: 'hsl(286, 100%, 98%)',
          100: 'hsl(286, 100%, 95%)',
          200: 'hsl(286, 100%, 92%)',
          300: 'hsl(286, 100%, 85%)',
          400: 'hsl(286, 100%, 75%)',
          500: 'hsl(286, 100%, 65%)',
          600: 'hsl(286, 100%, 56%)',
          700: 'hsl(286, 100%, 47%)',
          800: 'hsl(286, 100%, 39%)',
          900: 'hsl(286, 100%, 32%)',
          950: 'hsl(286, 100%, 23%)',
        }
      },
      fontFamily: {
        'elliptica': ['Elliptica'],
        'sans': [
          'Elliptica',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        'potra': ['Potra'],
      }
    },
  },
  plugins: [],
}

