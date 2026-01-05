// @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
  },
},

  plugins: [],
};
