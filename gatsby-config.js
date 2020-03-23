module.exports = {
  siteMetadata: {
    title: 'Alex Gale - Full Stack Developer',
    description: 'Alex Gale - Full Stack Developer',
    author: 'Alex Gale',
    keywords: 'Alex Gale, Alex, Gale, Web Developer, Web Designer, Website, Website Design, Web, Developer, HTML, CSS, React, Javascript, Node, Nodejs, Docker, Express, SASS'
  },
  plugins: [
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alex Gale',
        short_name: 'Alex Gale',
        start_url: '/',
        background_color: '#191919',
        theme_color: '#191919',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png'
      },
    },
		{
				resolve: "gatsby-plugin-web-font-loader",
				options: {
					custom: {
						families: ["Oswald", "Permanent Marker", "Sen"],
						urls: ["/fonts/fonts.css"]
					}
				}
		},
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
		'gatsby-plugin-offline',
  ],
}
