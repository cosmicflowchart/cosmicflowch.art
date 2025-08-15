const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#ffffff'
		},
		screens: {
			xs: '480px',
			xxs: '300px'
		},
		extend: {
			colors: {
				'cfc-purple': {
					50: 'hsl(288, 100%, 95%)',
					100: 'hsl(288, 100%, 90%)',
					200: 'hsl(288, 100%, 83%)',
					300: 'hsl(288, 100%, 75%)',
					400: 'hsl(288, 100%, 60%)',
					500: 'hsl(288, 100%, 49%)',
					600: 'hsl(288, 100%, 38%)',
					700: 'hsl(288, 100%, 27%)',
					800: 'hsl(288, 100%, 17%)',
					900: 'hsl(288, 100%, 10%)',
					950: 'hsl(288, 100%, 5%)'
				}
			},
			fontFamily: {
				exo2: ['Exo2'],
				sans: ['Exo2', ...defaultTheme.fontFamily.sans],
				potra: ['Potra']
			}
		}
	},
	plugins: []
};
