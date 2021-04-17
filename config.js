module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Ohbug', // Navigation and Site Title
  titleAlt: 'ohbug.net', // Title for JSONLD
  description: 'Ohbug is monitoring & reporting tool for app stability.',
  headline: 'Monitoring & Reporting Tool for App Stability - Ohbug', // Headline for schema.org JSONLD
  url: 'https://ohbug.net', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo.svg', // Used for SEO
  github: 'https://github.com/ohbug-org/ohbug-website',

  // JSONLD / Manifest
  favicon: '/logos/logo.svg', // Used for manifest favicon generation
  shortName: 'Ohbug', // shortname for manifest. MUST be shorter than 12 characters
  author: 'chenyueban', // Author for schemaORGJSONLD

  search: {
    // enabled: process.env.NODE_ENV === 'production',
    enabled: true,
    indexName: 'docs',
    algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
    algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    algoliaAdminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
  },
}
