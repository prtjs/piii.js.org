const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/components/Docs.js')

  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html,
            frontmatter {
              path
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
          title: node.frontmatter.title,
          links
        },
      })
    })
  })
}