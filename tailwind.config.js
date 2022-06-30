/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#5E58D6',
        orange: '#EE684B',
        blue: '#3533AE'
      },
      spacing: {
        '0auto': '0 auto'
      }
    },
  },
  plugins: [],
}
