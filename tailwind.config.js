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
        "primary-cloud": "#F5F5F5",
      },
      fontSize: {
        xxl: "3.375rem",
        xl: "2.625rem",
        lg: "1.5rem",
        md: "1.125rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
