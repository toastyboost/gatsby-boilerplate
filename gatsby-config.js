const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.WEBSITE_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    themeColor: "#2c52da",
    backgroundColor: "#2c52da",
    pathPrefix: null,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-webpack-size",
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "~/components": `${__dirname}/src/components`,
          "~/static": `${__dirname}/src/static`,
          "~/styles": `${__dirname}/src/styles`,
          "~/helpers": `${__dirname}/src/helpers`,
          "~/store": `${__dirname}/src/store`,
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: null,
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet-canonical-urls",
      options: {
        siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/static/favicon.png",
        appName: siteUrl,
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en",
        background: "#2c52da",
        theme_color: "#2c52da",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
