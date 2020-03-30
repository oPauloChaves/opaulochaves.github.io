require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.')
}

module.exports = {
  siteMetadata: {
    title: 'Paulo Chaves',
    description:
      'Passionate fullstack developer who enjoys building web apps. Work on the frontend with Reactjs and on the backend with Nodejs mainly. Working intensively with JAM stack lately. Quick-learner, consistently seeking and learning new technologies. Also with previous experiences with Java.',
    author: {
      name: 'Paulo Chaves',
    },
    siteUrl: 'https://paulochaves.dev',
    lang: 'en',
    social: {
      twitter: 'opaulochaves',
      github: 'opaulochaves',
      linkedin: 'opaulochaves',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Paulo Chaves',
        short_name: 'Paulo Chaves',
        description: 'Personal Website',
        homepage_url: 'https://paulochaves.dev',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-93757124-1',
        exclude: ['/preview/**'],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
