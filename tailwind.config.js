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
        xxxl: "3.375rem", // 54px
        xxl: "2.625rem", // 42px
        xl: "2rem", //32px
        lg: "1.5rem", //24px
        md: "1.125rem", //18px
        sm: "0.875rem", //14px
        xs: "0.75rem", //12px
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
