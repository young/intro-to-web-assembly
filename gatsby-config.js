module.exports = {
  siteMetadata: {
    title: "Introduction to Web Assembly",
    subtitle: "Jem Young",
    description:
      "Jem Young - Introduction to Web Assembly - Frontend Masters",
    keywords: [
      "web assembly",
      "frontend masters",
      "wasm",
      "jem young"
    ]
  },
  //pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
