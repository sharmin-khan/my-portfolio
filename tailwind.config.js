module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, 
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
       
      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
        },
      }, 
    ],
  },
};
