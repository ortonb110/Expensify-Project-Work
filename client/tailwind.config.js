/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#33b1bc",
        primaryBodyColor: "#486581",
      }
    },
  },
  plugins: [],
}