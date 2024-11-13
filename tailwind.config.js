/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      yellow: "#FEF900",
      black: "#000000",
      white: "#FFFFFF",
      secondary: "#1F1F1F",
    },
    fontFamily: {
      header: ['"Dancing Script"', "cursive"],     // For headers and titles
      body: ['"Open Sans"', "sans-serif"],         // For main body text
      alt: ['"Nunito Sans"', "sans-serif"],        // Additional font option
      poppins: ['"Poppins"', "sans-serif"],        // Another modern font option
      monts: ['"Montserrat"', "sans-serif"],  // Newly added Montserrat font
    },
  },
};
export const plugins = [];
