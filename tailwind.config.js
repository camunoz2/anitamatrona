const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".custom-gradient": {
          background:
            "-webkit-linear-gradient(90deg, #2F7FC8 -61.18%, #A842A5 126.47%)",
        },
        ".text-gradient": {
          background:
            "-webkit-linear-gradient(33deg, #2F7FC8 -61.18%, #A842A5 100%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px white",
        },
        ".gradient-outline": {
          background:
            "-webkit-linear-gradient(90deg, #2F7FC8 -61.18%, #A842A5 126.47%)",
          WebkitTextStroke: "2px transparent",
          backgroundClip: "text",
          color: "white",
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}
