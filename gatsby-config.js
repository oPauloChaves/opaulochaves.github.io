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
  pathPrefix: '',
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-sass',
  ],
}
