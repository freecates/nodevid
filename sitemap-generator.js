const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://nodevid.now.sh',
  ignoredPaths: ['admin'],
  pagesDirectory: 'pages',
  targetDirectory: 'public/'
})
