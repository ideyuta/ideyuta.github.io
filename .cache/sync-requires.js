const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/ide/Works/ideyuta.github.io/src/templates/post.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ide/Works/ideyuta.github.io/src/pages/index.js")))
}

