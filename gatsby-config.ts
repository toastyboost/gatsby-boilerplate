import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Starter`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['JetBrains Mono:400,700', 'Roboto:400,700,900']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
};

export default config;
