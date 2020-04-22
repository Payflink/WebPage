const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              lang
              slug
              title
              templateKey
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const { edges } = result.data.allMarkdownRemark
    edges.forEach(({ node }, index) => {
      const prev = index === 0 ? null : edges[index - 1].node
      const next = index === edges.length - 1 ? null : edges[index + 1].node
      const pagePath = path.join('/', 'blog', node.frontmatter.slug, '/')
      console.log('lang', node.frontmatter.lang)
      console.log('create page', pagePath)
      createPage({
        path: pagePath,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          lang: node.frontmatter.lang,
          slug: node.frontmatter.slug,
          prev,
          next,
        },
      })
    })
    return null
  })
}
