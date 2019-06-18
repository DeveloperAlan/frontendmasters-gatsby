module.exports = {
    siteMetadata: {
        title: "Frontend Masters Gatsby workshop",
        description: 
            "A site we built together during a full-dsay frontend masters gatsby workshop",
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                }
            }
        }
    ],
}