const { palette } = require("./style")

module.exports = {
  siteMetadata: {
    title: `Dandroos Gatsby Starter`,
    description: `My Gatsby starter template. It includes Material-UI, Redux, Framer Motion and some basic boilerplate!`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-mui-emotion`,
    `gatsby-plugin-redux-wrapper`,
    `gatsby-plugin-framer-motion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static_pages`,
        path: `${__dirname}/content/static_pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images-v2`,
            options: {
              staticFolderName: "content/site_images",
            },
            // options: {
            // [Optional] The root of "media_folder" in your config.yml
            // Defaults to "static"
            // staticFolderName: 'static',
            // [Optional] Include the following fields, use dot notation for nested fields
            // All fields are included by default
            // include: ['featured'],
            // [Optional] Exclude the following fields, use dot notation for nested fields
            // No fields are excluded by default
            // exclude: ['featured.skip'],
            // },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: palette.primary,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: palette.primary,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
