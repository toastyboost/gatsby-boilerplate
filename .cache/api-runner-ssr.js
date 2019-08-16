var plugins = [{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":false},
    },{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":null},
    },{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/node_modules/gatsby-plugin-react-helmet-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://website.com"},
    },{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[],"logo":"./src/static/favicon.png","appName":"https://website.com","appDescription":null,"developerName":null,"developerURL":null,"dir":"auto","lang":"en","background":"#2c52da","theme_color":"#2c52da","display":"standalone","orientation":"any","start_url":"/","version":"1.0","icons":{"android":true,"appleIcon":true,"appleStartup":false,"coast":false,"favicons":true,"firefox":true,"yandex":false,"windows":false}},
    },{
      plugin: require('/Users/dmitriy/Dev/gatsby-boilerplate/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
