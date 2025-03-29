/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["DM Serif Text", "Georgia", "serif"]
      }
    },
    
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn .4s ease-in-out forwards",
        ["fade-in"]: "fadeIn .4s ease-in-out forwards",
      },
      colors: {
        verde: {
          200: "#acef75",
          300: "#91ee77",
          400: "#17e880",
          700: "#2e482c",
          800: "#16281f",
          900: "#0f1c15",
          950: "#030504",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay() {
        const delays = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            "animation-delay": `${i * 100}ms`,
          };
        }

        return delays;
      }
      addUtilities(animationDelay());
    }),
  ],
};
