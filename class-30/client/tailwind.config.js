/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color:'#006d77',
        secondary_color:'#83c5be',
        bg_color:'#edf6f9',
      }
    },
  },
  plugins: [],
}