/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#364FA2",
        birumuda:"#00AEEF",
        ig:"#e4405f",
        linkedin:"#0077B5",
        github:"#000",
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
          ...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
          "base-100": "#1F2428",
          // "base-100": "#393c41",
          primary: "#364FA2",
          secondary: "#ffff",
          neutral:"#364FA2",  
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
};
