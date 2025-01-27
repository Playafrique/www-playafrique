import type { Config } from 'tailwindcss'

const palette = {
    brand: {
        50: '#fbf2e9', // light
        100: '#f1dac2',
        200: '#e9c09a',
        300: '#e2a76f',
        400: '#da8e45',
        500: '#c1752d',
        600: '#955b23',
        700: '#6a411a',
        800: '#402710',
        900: '#160d04', // dark
        dark: '#160d04',
        light: '#fbf2e9',
    },
}

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: palette.brand[500],
                secondary: palette.brand[400],
                brand: palette.brand,
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            fontFamily: {
                sans: ['Montserrat Variable', 'sans-serif'],
                script: ['Dancing Script Variable', 'cursive'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
