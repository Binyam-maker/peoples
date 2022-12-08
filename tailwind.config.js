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
        sidebarMainMobile: "90px 1fr",
      },
      gridTemplateRows: {
        navbarMain: "6rem 1fr",
        navbarMainMobile: "8rem 1fr",
      },

      colors: {
        mainBlue: "#00A1f2",
        lightBlue: "#9DC8E4",
        darkGray: "#33393D",
        lightGray: "#666B6E",
        mainYellow: "#FFCD24",
        mainRed: "#f40612",
        transparentBlack: "rgba(0,0,0,30%)",
        transparentBlack2: "rgba(0,0,0,92%)",
        white: "rgb(255 255 255)",
        // alternative blue - #2AABE4
      },
    },
  },
  plugins: [],
};
