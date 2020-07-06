import "./src/stylesheets/tailwind.css";

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');
 
registerLinkResolver(linkResolver);

