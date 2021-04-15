require('dotenv').config()
const baseConfig = require('./config')
const queries = require('./src/utils/algolia')
const pathPrefix = baseConfig.pathPrefix === '/' ? '' : baseConfig.pathPrefix

const plugins = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/docs/`,
      ignore: ['**/.*'], // ignore files starting with a dot
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
    },
  },
  {
    resolve: `gatsby-plugin-less`,
  },
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/utils/typography',
      omitGoogleFont: true,
    },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      color: '#FF6F61',
    },
  },
]
if (
  baseConfig.search &&
  baseConfig.search.enabled &&
  baseConfig.search.algoliaAppId &&
  baseConfig.search.algoliaAdminKey
) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: baseConfig.search.algoliaAppId, // algolia application id
      apiKey: baseConfig.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true,
      matchFields: ['slug', 'modified'],
    },
  })
}

module.exports = {
  pathPrefix: baseConfig.pathPrefix,
  siteMetadata: {
    siteUrl: baseConfig.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: baseConfig.title,
    titleAlt: baseConfig.titleAlt,
    description: baseConfig.description,
    banner: baseConfig.logo,
    headline: baseConfig.headline,
    siteLanguage: baseConfig.siteLanguage,
    author: baseConfig.author,
  },
  plugins,
}
