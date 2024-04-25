import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('/background/bg-grid.png')",
        "grid-dk": "url('/background/bg-grid-dark.png')",
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        "major-mono": ["Major Mono Display", ...fontFamily.sans],
      },
      colors: {
        "purple-main": "#5200FF",
        "orange-main": "#FF7A00",
        "gray-main": "#5A5A5A",
        "light-gray-main": "#D9D9D9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
