// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "hero-image": "url('./src/images/hero.jpg')",
      }),
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
