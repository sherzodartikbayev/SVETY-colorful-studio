/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: '#22376E',
				silver: '#8294C2',
				lightSilver: '#E6EBF8',
				white: '#FFFFFF',
				yellow: '#ECD6AE',
				brown: '#715C36',
				grey: '#999999',
				black: '#252525',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				philosopher: ['Philosopher', 'sans-serif'],
			},
			borderRadius: {
				10: '10px',
			},
		},
	},
	plugins: [],
}
