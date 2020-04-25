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

  let postLang = {}
  posts.forEach(({ node }) => {
    if (!postLang[node.id]) {
      postLang[node.id] = { [node.locale]: !!node.title }
    }
    postLang[node.id][node.locale] = !!node.title
  })

  posts.forEach(({ node }) => {
    const { locale } = node
    const lang = locale === 'en' ? '' : `/${locale.toLowerCase()}`

    // if there's content for the current language, create its page
    if (postLang[node.id][locale]) {
      createPage({
        path: `${lang}/blog/${node.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          locale,
          id: node.id,
          slug: node.slug,
          postLocales: postLang[node.id],
        },
      })
    }
  })

  return true
}

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
