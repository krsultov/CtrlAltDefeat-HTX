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
        primary:"#53C7F0",
        secondary:"#FAF2C3",
        primaryDark:"#1D97C1",
        secondaryDark:"#F6E4AD",
      }
    },
  },
  plugins: [],
};
