/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"


module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({addUtilities, addComponents}) => {

      // cria a classe
      addUtilities({
        ".text-shadow": {
          'text-shadow': '-2px 2px 5px currentColor'
        },
        ".text-shadow-lg": {
          'text-shadow': '-5px 5px 10px currentColor'
        }
      })

      // adicionar um componente
      addComponents({
        ".btn-ghost": {
          'border-radius': '9999px',
          'padding': '.5rem 1rem',
          'opacity': '.2',
          'border': '2px solid #ccc'
        }
      })
    }),


    // plugin(function({addUtilities, addComponents}) {

    // })
  ],
}

