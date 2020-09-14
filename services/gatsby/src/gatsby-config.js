module.exports = {
    plugins: [
      {
        // ...
        resolve: '@directus/gatsby-source-directus',
        options: {
          url: process.env.GATSBY_DIRECTUS_URL,
          project: process.env.GATSBY_DIRECTUS_PROJECT,
          auth: {
            email: process.env.GATSBY_DIRECTUS_EMAIL,
            password: process.env.GATSBY_DIRECTUS_PASSWORD,
          },
          targetStatuses: ['published', '__NONE__'],
        },
      },
    ],
  };