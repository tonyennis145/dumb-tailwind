/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/classes.txt"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
