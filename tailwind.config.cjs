/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Thai", "sans-serif"],
      }
    },
  },
  plugins: [],
}
