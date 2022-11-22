/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#87F9EB",
          300: "#C6FCF6",
          400: "#0CE0C7",
          500: "#2BF4DC",
          600: "#0CEAD0",
          700: "#067164",
          800: "#04453E",
          900: "#021E1B",
        },
        premier: {
          50: "#FCEEE9",
          100: "#F2BFAB",
          200: "#ECA488",
          300: "#E78965",
          400: "#E16D42",
          500: "#D85422",
          600: "#BE4A1E",
          700: "#A33F1A",
          800: "#893516",
          900: "#6E2B11",
        },
      },
    },
  },
  plugins: [],
};
