const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "~/components": path.resolve(__dirname, "src/components"),
          "~/static": path.resolve(__dirname, "src/static"),
          "~/styles": path.resolve(__dirname, "src/styles"),
          "~/helpers": path.resolve(__dirname, "src/helpers"),
          "~/store": path.resolve(__dirname, "src/store"),
        },
        extensions: ["js"],
      },
    },
  ],
};
