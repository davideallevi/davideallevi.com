module.exports = {
  siteMetadata: {
    title: 'Freelance Digital Designer',
    description: 'I design and develop digital products, strategies and identities tailored on brands.',
    author: 'davideallevi'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/posts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experiments`,
        path: `./src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'sans-serif']
        }
      }
    }
  ]
}
