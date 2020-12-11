module.exports = {
  purge:
    process.env.NODE_ENV === 'production'
      ? {
          content: ['**/**/*.njk'],
          options: {
            whitelist: [],
          },
        }
      : false,
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
