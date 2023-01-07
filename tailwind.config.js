/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.js',
  ],
  theme: {
    extend: {
      colors:{
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      }
    },
  },
  plugins: [],
}
