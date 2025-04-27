
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f1efe7',
        'text': '#121213',
      },
      fontFamily: {
        'noto': ['"Noto Sans"', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      spacing: {
        '10rem': '10rem',
        '15em': '15em',
      },
      fontSize: {
        'hero': '20vw',
      },
      letterSpacing: {
        'tighter-hero': '-0.5rem',
      },
      height: {
        'screen-safe': '100svh',
      },
      animation: {
        'move-out': 'move-out 1.5s cubic-bezier(0.87, 0, 0.13, 1) both',
        'move-in': 'move-in 1.5s cubic-bezier(0.87, 0, 0.13, 1) both',
      },
      keyframes: {
        'move-out': {
          'from': { opacity: 1, transform: 'translateY(0)' },
          'to': { opacity: 0.5, transform: 'translateY(-35%)' },
        },
        'move-in': {
          'from': { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
          'to': { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' },
        }
      }
    },
  },
  plugins: [],
}