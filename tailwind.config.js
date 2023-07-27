/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4e5de9",
        headingColor: "#5817ba",
        smallTextColor: "#061d2d",
        accent: "#c7a9f4",
        primaryColorDark: "#a777ee",
        headingColorDark: "#4e5de9",
        smallTextColorDark: "#fafafa",
        accentDark: "#16062d",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
