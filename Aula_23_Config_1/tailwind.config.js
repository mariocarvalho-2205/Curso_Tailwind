/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        verde: {
          200: "#acef75",
          300: "#91ee77",
          900: "#16281f",
          950: "#0f1c15",
        }
      }
    },
  },
  plugins: [],
}

