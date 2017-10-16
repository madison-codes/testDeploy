module.exports = {
	siteMetadata: {
		title: `IronCore Labs Documentation`,
	},
	pathPrefix: `/documentation`,
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-plugin-typescript`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				classPrefix: `language-js`,
				plugins: [
					`gatsby-remark-prismjs`,
				],
			},
		},
	]
}
