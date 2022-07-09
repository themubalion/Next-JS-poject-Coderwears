/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./dummyArticles/**/*.{*,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      screens: {
        'mediumScreen': {'max': '1072px'},
        'notMedium': '1072px',
        'small': {'max': '650px'},
        'notSmall': '650px'
      }
    },
  },
  plugins: [],
}
