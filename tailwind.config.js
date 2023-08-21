/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#364FA2",
      },
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#364FA2",
          secondary:"#1F2937",
          neutral:"#364FA2",  
          "primary-focus": "mediumblue",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#364FA2",
          secondary: "#ffff",
          neutral:"#364FA2",  
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
};
