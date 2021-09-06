const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			const screens = theme('screens', {})
			const mediaQueries = _.map(screens, (width, breakpoint) => {
				return {
					[ `@media (min-width: ${ width })` ]: {
						'.breakpoint-display::after': {
							content: `'${ breakpoint }'`,
						},
					},
				}
			})

			addComponents([
				{
					'.breakpoint-display': {
						color: 'white',
						position: 'fixed',
						left: "50%",
						transform: "translate(-50%)",
						fontSize: 10,
						zIndex: 100,
						backgroundColor: 'black',
						borderRadius: "0 0 5px 5px",
						textTransform: 'uppercase',
						padding: theme('spacing.1'),
						'&::after': {
							content: `'default'`,
						},
					},
				},
				...mediaQueries,
			])
		}),
	],
}
