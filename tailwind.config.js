/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#fdfffc',
  				foreground: '#0b090a'
  			},
  			secondary: {
  				DEFAULT: '#287c74',
  				foreground: '#fdfffc'
  			},
  			accent: {
  				DEFAULT: '#6a994e',
  				foreground: '#fdfffc'
  			},
  			highlight: '#bc4749',
  			dark: '#0b090a',
  			background: '#fdfffc',
  			foreground: '#0b090a',
  			card: {
  				DEFAULT: '#fdfffc',
  				foreground: '#0b090a'
  			},
  			popover: {
  				DEFAULT: '#fdfffc',
  				foreground: '#0b090a'
  			},
  			muted: {
  				DEFAULT: '#287c74',
  				foreground: '#fdfffc'
  			},
  			destructive: {
  				DEFAULT: '#bc4749',
  				foreground: '#fdfffc'
  			},
  			border: '#0b090a',
  			input: '#0b090a',
  			ring: '#6a994e',
  			chart: {
  				'1': '#6a994e',
  				'2': '#287c74',
  				'3': '#bc4749',
  				'4': '#0b090a',
  				'5': '#fdfffc'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}