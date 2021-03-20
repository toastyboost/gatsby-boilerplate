const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "${siteUrl}";

module.exports = {
  siteMetadata: {
    siteUrl,
    themeColor: "#2c52da",
    backgroundColor: "#2c52da",
    pathPrefix: null,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-helmet-canonical-urls",
      options: {
        siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/locales`,
        languages: ["en", "es"],
        defaultLanguage: "en",
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production",
        fileName: false,
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "src/ui": `${__dirname}/src/ui`,
        },
        extensions: [".ts", ".tsx"],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "JetBrains Mono",
              variants: [`400`, `700`, `900`],
              subsets: ['latin', 'cyrillic'],
              strategy: 'selfHosted'
            },
            {
              family: "Roboto",
              variants: [`400`, `700`],
              subsets: ['latin', 'cyrillic'],
              strategy: 'selfHosted'
            },
          ],
        },
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: '0',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "{siteName}",
        short_name: "{siteShortName}",
        start_url: `en/`,
        background_color: "#2c52da",
        theme_color: "#2c52da",
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
  ],
};
