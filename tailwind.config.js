/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-70deg': 'linear-gradient(70deg, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
