module.exports = {
  siteMetadata: {
    title: `Jenil Thakker`,
    name: `Jenil Thakker`,
    siteUrl: `https://jenil.dev`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jenil_thakker`,
      },
      {
        name: `github`,
        url: `https://github.com/jenil04`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jenil_thakker`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/jenilthakker`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
