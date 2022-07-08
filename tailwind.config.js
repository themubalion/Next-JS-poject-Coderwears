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
        'md': {'max': '767px'},
        'small': {'max': '650px'},
        'notSmall': '650px'
      }
    },
  },
  plugins: [],
}
