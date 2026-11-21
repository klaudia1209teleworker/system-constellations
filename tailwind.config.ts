import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5C3D2E',
        secondary: '#C4A484',
        text: '#2A211C',
        highlight: '#8B3A2F',
        accent: '#6B7F5A',
        bg: '#EDE6DB',
        muted: '#7A6E64',
        border: '#D2C6B6',
        surface: '#F7F2EA',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Noto Sans TC"', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.25rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-rise': {
          '0%': { opacity: '0', transform: 'translateY(0.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s ease-out both',
        'soft-rise': 'soft-rise 0.7s ease-out 0.2s both',
        'line-grow': 'line-grow 0.8s ease-out 0.45s both',
      },
    },
  },
  plugins: [],
}

export default config
