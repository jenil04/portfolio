// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      'favorit': ['FavoritExtended', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'soehne': ['Soehne', '-apple-system', 'BlinkMacSystemFont'],
      'display': ['FavoritExtended', 'sans-serif'],
      'body': ['FavoritExtended', 'sans-serif'],
      }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
