/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-midnight": "#161E35",
        "primary-sky": "#5D97FF",
        "primary-snow": "#FFFFFF",
        "primary-storm": "#5B6D89",
        "primary-shadow": "#8A99B1",
        "primary-fog": "#C0CAD9",
      },
      fontSize: {
        xxl: "3.375 rem",
        xl: "2.625 rem",
        lg: "1.5 rem",
        md: "1.125 rem",
        sm: "0.875 rem",
        xs: "0.75 rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
