/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
      },
    },
    container: {
      center: true,
      padding: "2rem", // Adds padding to container for small screens
    },
  },
  plugins: [],
};
