module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['Mono', '-apple-system', 'BlinkMacSystemFont'],
      'monob': ['Monob', '-apple-system', 'BlinkMacSystemFont']
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
