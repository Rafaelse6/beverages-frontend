/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "bec-color-bg-primary": "#E8E8E8",
      "bec-color-bg-secundary": "#00105F",
      "bec-color-bg-tertiary": "#E8BB00",

      "bec-color-card-border": "#D9D9D9",
      "bec-color-btn-primary": "#D19300",
      "bec-color-card-bg": "#FFF",

      "bec-color-btn-inverse": "#FFF",
      "bec-color-font-primary": "#000",
      
      "beg-color-error": "#F33",
    },
  },
};
export const plugins = [];
