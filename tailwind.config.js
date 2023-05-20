/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["rounded"],
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      container: {
        padding: "5rem",
        center: true,
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
