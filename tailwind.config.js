module.exports = {
  content: ["./src/**/*.{jsx, css}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
