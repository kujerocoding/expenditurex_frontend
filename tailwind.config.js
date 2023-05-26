/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#3c403a',
        'secondary': '#131111',
        'text': '#f0efef',
        'accent': '#3a3c40',
        'bg': '#030202'
      }
    },
  },
  plugins: [],
}

