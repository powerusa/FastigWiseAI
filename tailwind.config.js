/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf8ff',
          100: '#d6edff',
          200: '#b5e0ff',
          300: '#83ceff',
          400: '#48b3ff',
          500: '#1e95fd',
          600: '#0973e3',
          700: '#0b5cb4',
          800: '#114d94',
          900: '#14427a',
          950: '#0f2a4e',
        },
        secondary: {
          50: '#effdf5',
          100: '#d7f9e5',
          200: '#b0f1ce',
          300: '#7ae3b1',
          400: '#3ece8e',
          500: '#1ab275',
          600: '#0f915f',
          700: '#0f744f',
          800: '#115c41',
          900: '#114c38',
          950: '#042b20',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};