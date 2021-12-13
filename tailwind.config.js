module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      't': ['Titlef', '-apple-system', 'BlinkMacSystemFont'],
      'b': ['Bodyf', '-apple-system', 'BlinkMacSystemFont']
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
