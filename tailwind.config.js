/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf9f9",
        text: "#14213d",
        primary: "#403d39",
        secondary: "#fca311",
      },
    },
  },
  plugins: [],
};
