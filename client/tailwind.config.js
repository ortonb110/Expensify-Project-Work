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
        primaryBodyColorLight: "#627d98",
        colorRedDark: '#842029',
        colorRedLight: '#f8d7da',
        colorGreenDark: '#0f5132',
        colorGreenLight: '#d1e7dd',
      }
    },
  },
  plugins: [],
}