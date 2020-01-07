module.exports = [{
      plugin: require('../node_modules/@raae/gatsby-remark-oembed/gatsby-browser.js'),
      options: {"plugins":[],"usePrefix":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"ideyuta.com","icon":"src/images/icon.png","short_name":"ideyuta.com","start_url":"/","background_color":"#fff","theme_color":"#5AB87E","display":"standalone"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
