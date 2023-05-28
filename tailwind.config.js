/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#7F57F1",
        black: "#2F234F",
        "black-light": "rgba(47, 35, 79, 0.8)",
        "black-lighter": "rgba(47, 35, 79, 0.5)",
      },
      fontFamily: {
        playfair_display: ["var(--font-playfair-display)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
