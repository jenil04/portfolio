module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      't': ['Titlef', '-apple-system', 'BlinkMacSystemFont'],
      'b': ['Bodyf', '-apple-system', 'BlinkMacSystemFont'],
      'r': ['Breakf', '-apple-system', 'BlinkMacSystemFont'],
      'i': ['Breakit', '-apple-system', 'BlinkMacSystemFont'],
      'rt': ['Breakbf', '-apple-system', 'BlinkMacSystemFont'],
      'ri': ['Breakitb', '-apple-system', 'BlinkMacSystemFont'],
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
