/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        primary:"#CBF3F0",
        secondary:"#FFBF69",
        primaryDark:"#2EC4B6",
        secondaryDark:"#FF9F1C",
        bgPrimary: "#53C7F0",
        bgSecondary: "#FAF2C3",
      }
    },
  },
  plugins: [],
};
