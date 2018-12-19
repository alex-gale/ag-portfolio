module.exports = {
  siteMetadata: {
    title: 'Alex Gale - Full Stack Developer',
    description: 'Alex Gale - Full Stack Developer',
    author: 'Alex Gale',
    keywords: 'Alex Gale, Alex, Gale, Web Developer, Web Designer, Website, Website Design, Web, Developer, HTML, CSS, React, Javascript, Node, Nodejs, Docker, Express, SASS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alex Gale',
        short_name: 'Alex Gale',
        start_url: '/',
        background_color: '#191919',
        theme_color: '#191919',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
