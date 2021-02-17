const config = require('../../config')

const query = `{
  pages: allMdx {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        headings {
          value
        }
        frontmatter {
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const queries = [
  {
    query,
    transformer: ({ data }) =>
      data.pages.edges
        .map(({ node }) => node)
        .filter(({ fields }) => fields.slug !== '/docs/SUMMARY'),
    indexName: config.search.indexName,
    matchFields: ['slug', 'modified'],
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
