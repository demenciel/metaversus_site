module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: '2.5rem', fontWeight: '700' },
            h2: { fontSize: '2rem', fontWeight: '600' },
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};