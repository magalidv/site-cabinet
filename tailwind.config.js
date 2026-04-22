/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              primary: "#263B46",     // titres
              accent: "#BC632E",      // highlights
              light: "#EEE6D8",       // fond principal
              soft: "#e5e7e6",        // contrast léger
      }
    },
  },
  plugins: [],
};