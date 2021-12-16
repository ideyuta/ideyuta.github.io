module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: "ideyuta.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: { usePrefix: false },
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ideyuta.com`,
        icon: `static/images/icon.png`,
        short_name: `ideyuta.com`,
        start_url: `/`,
        background_color: `#F2F2EE`,
        theme_color: `#F2F2EE`,
        display: `standalone`,
      },
    },
  ],
};
