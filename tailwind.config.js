/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/setB.txt"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
