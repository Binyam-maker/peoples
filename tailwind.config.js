/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebarMain: "120px 1fr",
      },
      gridTemplateRows: {
        navbarMain: "6rem 1fr",
      },
      colors: {
        mainBlue: "#00A1f2",
        lightBlue: "#9DC8E4",
        darkGray: "#33393D",
        lightGray: "#666B6E",
        mainYellow: "#FFCD24",
        white: "rgb(255 255 255)",
        // alternative blue - #2AABE4
      },
    },
  },
  plugins: [],
};
