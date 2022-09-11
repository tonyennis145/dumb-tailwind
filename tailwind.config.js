/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/setA.txt"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
