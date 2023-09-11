/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        "modal-background": "rgba(0, 0, 0, 0.5)",
        "hunet-black": "#191E28",
        "modu-blue": "#385AE8",
        "main-red": "#EC5A5A",
        "main-gray": "#8188A0",
        cancel: "#8188A0",
        "list-hover": "#F6F7FC",
        "main-background": "#F6F7FC",
        "main-border": "#E4E6ED",
        "blue-button-hover": "#223FB7",
        "cancel-button-hover": "#696D7A",
        "blue-button-disabled": "#A8B4E9",
        "cancel-button-disabled": "#B6B9C2",
        "main-line": "#E4E6ED",
        "dark-line": "#ACB5BD",
        error: "#E75B5B",
        "inactive-gray": "#95979B",
        "review-marked": "#CFD7F8",
        "gray-blue": "#F4F6FA",
        "kebab-hover": "#E3E6EC",
      },
      keyframes: {
        toastMove: {
          "0%": {
            marginTop: "10px",
          },
          "100%": {
            marginTop: "0",
          },
        },
      },
      animation: {
        toastMove: "toastMove 0.4s ease-out forwards",
      },
      screens: {
        lg: { max: "1440px" },
        "2xl": { min: "1810px" },
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "800px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
