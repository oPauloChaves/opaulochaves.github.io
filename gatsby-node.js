const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      articles: allDatoCmsArticle(sort: { order: DESC, fields: publishDate }) {
        edges {
          node {
            id
            title
            slug
            locale
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new result.errors()
  }

  ;['en', 'pt-BR'].forEach((locale) => {
    const root = locale === 'en' ? '/' : `/${locale.toLowerCase()}`
    createPage({
      path: root,
      component: path.resolve('./src/templates/home.js'),
      context: {
        locale,
      },
    })
  })

  const posts = result.data.articles.edges

  posts.forEach(({ node }) => {
    const { locale } = node
    const lang = locale === 'en' ? '' : `/${locale.toLowerCase()}`

    // if there's content for the current language, create its page
    if (node.title) {
      createPage({
        path: `${lang}/blog/${node.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          locale,
          id: node.id,
          slug: node.slug,
        },
      })
    }
  })

  return true
}

/*
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      }),
    )
  })
}
*/

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
