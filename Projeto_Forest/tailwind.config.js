/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem"
      }
    },
    extend: {
      colors: {
        verde: {
          200: "#acef75",
          300: "#91ee77",
          400: "#17e880",
          700: "#2e482c",
          800: "#16281f",
          900: "#0f1c15",
          950: "#030504",
        }
      }
    }
  },
  plugins: [],
}

