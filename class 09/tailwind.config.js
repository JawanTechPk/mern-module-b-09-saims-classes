/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      md: {
        px: "20px",
      },
      lg: {
        px: "20px",
      },
    },

    extend: {
      colors: {
        primary: "#006D77",
        secondary: "#83C5BE",
        bg_light: "#EDF6F9",
      },
    },
  },
  plugins: [],
};
