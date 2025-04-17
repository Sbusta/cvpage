import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      "sebasdark":{
        extend:"dark",
        colors: {
          background: "#001122",
          foreground: "#ffffff",
          black: "#001122",
          primary: {
            50: "#0d333c",
            100: "#1b5354",
            200: "#29746b",
            300: "#369583",
            400: "#44b59b",
            500: "#51d6b3",
            600: "#74dec2",
            700: "#97e6d1",
            800: "#b9efe1",
            900: "#dcf7f0",
            DEFAULT: "#51d6b3",
            foreground: "#ffffff",
          },
          secondary: {
            50: "#2a2c28",
            100: "#54462c",
            200: "#7e6130",
            300: "#a87b33",
            400: "#d29537",
            500: "#fcaf3b",
            600: "#fdbf62",
            700: "#fdcf89",
            800: "#fedfb1",
            900: "#feefd8",
            DEFAULT: "#fcaf3b",
            foreground: "#001122",
          } 
        }
      },
      "sebaslight":{
        extend:"light",
        colors: {
          background: "#ffffff",
          foreground: "#001122",
          primary: {
            50: "#002b41",
            100: "#004559",
            200: "#006069",
            300: "#007e74",
            400: "#009c73",
            500: "#3db86a",
            600: "#64c688",
            700: "#8bd4a6",
            800: "#b1e3c3",
            900: "#d8f1e1",
            DEFAULT: "#64c688",
            foreground: "#001122",
          },
          secondary: {
            50: "#2a2c28",
            100: "#54462c",
            200: "#7e6130",
            300: "#a87b33",
            400: "#d29537",
            500: "#fcaf3b",
            600: "#fdbf62",
            700: "#fdcf89",
            800: "#fedfb1",
            900: "#feefd8",
            DEFAULT: "#fcaf3b",
            foreground: "#001122",
          }  
        }
      }
    }
  })],
}
module.exports = config;