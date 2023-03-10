/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.{js, jsx}",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  // darkMode: "media",
  darkMode: "class",
  theme: {
    screens: {
      min2xl: { max: "1535px" },
      minxl: { max: "1279px" },
      minlg: { max: "1023px" },
      minmd: { max: "767px" },
      minsm: { max: "639px" },

      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    extend: {},
  },
  plugins: [],
};
