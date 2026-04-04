const path = require("path");
const { WORKS } = require("./src/constants/works");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/post.js");
  const workTemplate = path.resolve("src/templates/work.js");

  // Generate works pages
  Object.keys(WORKS).forEach((workId) => {
    createPage({
      path: `/works/${workId}`,
      component: workTemplate,
      context: { workId },
    });
  });

  // Generate markdown posts
  return graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { createdAt: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          postPath: node.frontmatter.path,
        },
      });
    });
  });
};
