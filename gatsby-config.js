require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `blog-do-lucis`,
        accessToken: `${process.env.PRISMIC_KEY}`,
        linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
        schemas: {
          post: require('./src/schemas/post.json'),
        },
      },
    },
  ],
}
