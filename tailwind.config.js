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
    themes: [
      {
        mytheme: {
          "primary": "#364FA2",
                  
          "secondary": "#e0e023",
                  
          "accent": "#d1ae23",
                  
          "neutral": "#364FA2",
                  
          "base-100": "#f7f7f8",
                  
          "info": "#53a1d5",
                  
          "success": "#269c84",
                  
          "warning": "#a65708",
                  
          "error": "#e6335d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}