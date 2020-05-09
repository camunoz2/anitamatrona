### Insta Blog

I must refresh log lived token in instagram

Source data to be queried at build time
To source data using an existing source plugin you need to install a plugin and add it to your config. To use gatsby-source-graphql, first install it:

Copycopy code to clipboard
npm install --save gatsby-source-graphql
Then, add the plugin to your gatsby-config:

gatsby-config.js
Copygatsby-config.js: copy code to clipboard
module.exports = {
plugins: [
{
resolve: `gatsby-source-graphql`,
options: {
typeName: `GitHub`,
fieldName: `github`,
url: `https://api.github.com/graphql`,
headers: {
Authorization: `Bearer your-github-token`,
},
},
},
],
}
