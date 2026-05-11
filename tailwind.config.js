/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              primary: "#152f57",     // titres
              accent: "#c76730",      // highlights
              light: "#EEE6D8",       // fond principal
              soft: "#e5e7e6",        // contrast léger
      }
    },
  },
  plugins: [],
};