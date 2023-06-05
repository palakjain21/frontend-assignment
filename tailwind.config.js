/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "grey-bg": "#F7F7F7",
      },
      spacing: {
        13: "13px",
      },
      width: {
        13: "13px",
      },
      height: {
        13: "13px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
