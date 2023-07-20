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
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        primaryColorDark: "#FF7043",
        headingColorDark: "#FF5722",
        smallTextColorDark: "#FAFAFA",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
