/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#364FA2',
      }
    },
    fontFamily:{
      jakarta: ['Plus Jakarta Sans', 'sans-serif']
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}