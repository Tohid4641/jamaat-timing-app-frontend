/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-navbar': 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [require('daisyui')],
}