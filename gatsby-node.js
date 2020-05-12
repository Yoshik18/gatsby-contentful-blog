const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlog.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/layouts/PostLayout.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
