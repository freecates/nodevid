const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://nodevi.now.sh',
  ignoredPaths: ['admin'],
  pagesDirectory: 'pages',
  targetDirectory: 'public/'
})
