const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/components/Docs/index.js')

  return graphql(`
    query {
      allMarkdownRemark (sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            html,
            fileAbsolutePath,
            frontmatter {
              path,
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark
    const links = edges.map((edge) => edge.node.frontmatter)

    edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          html: node.html,
          currentPath: node.frontmatter.path,
          filename: path.parse(node.fileAbsolutePath).base,
          links
        }
      })
    })
  })
}