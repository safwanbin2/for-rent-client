/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF4D00",

          "secondary": "#1C1C1C",

          "accent": "#9dd81c",

          "neutral": "#1E1929",

          "base-100": "#F7F7F7",

          "info": "#82D8F7",

          "success": "#23C765",

          "warning": "#F4C91A",

          "error": "#EC466D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
