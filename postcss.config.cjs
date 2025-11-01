const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(isProd
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './index.html',
              './src/**/*.{ts,tsx,js,jsx,html}',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:\[\]().%]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
}