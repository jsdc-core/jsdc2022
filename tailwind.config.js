module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/assets/styles/*.{css, scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'mx-height': 'max-height',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
