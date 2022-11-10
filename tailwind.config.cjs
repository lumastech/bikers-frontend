/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {

        xs: '4px',
        md:'12px',
        lg:'16px',
        xl:'24px',
        '2xl':'40',
        '3xl':'60'

      }
    },
  },
  plugins: [],
}
