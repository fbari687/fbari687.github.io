/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed1e24",
        secondary: "#f78d1e",
        tertiary: "#2c3891",
        divider: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
