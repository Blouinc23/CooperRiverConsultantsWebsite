/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
    },
    keyframes: {
      moveRight: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-107%)" },
      },
      },
      animation: {
        moveRight: "moveRight 15s infinite linear",
      },

      colors: {
        primary: "#7c503c",
        purple: "#7153AC",
        blue: "#3D84A8",
        liteblue: "#87B0C5",
        blacklite: "#030607",
        green:  "#8BC280",
      },
      
    plugins: [],
  },
},}

