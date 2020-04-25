import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import './blog-post.scss'

export default function BlogPost(props) {
  const { locale, postLocales } = props.pageContext
  const { post } = props.data
  const { node: home } = props.data.home.edges[0]

  // TODO add canonical url link to SEO

  return (
    <Layout
      location={props.location}
      slug={`blog/${post.slug}`}
      locale={locale}
      postLocales={postLocales}
      site={home.owner}
      langs={['en', 'pt-BR']}
    >
      <HelmetDatoCms seo={post.seoMetaTags} />
      <article className="blog__article">
        <div>
          <header>
            <h1>{post.title}</h1>
            <div className="blog__meta">
              <span>{post.publishDate}</span>
              <span>{post.bodyNode.childMarkdownRemark.timeToRead} min read</span>
            </div>
          </header>
        </div>
        <section
          dangerouslySetInnerHTML={{
            __html: post.bodyNode.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($id: String!, $locale: String!) {
    post: datoCmsArticle(id: { eq: $id }, locale: { eq: $locale }) {
      bodyNode {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      title
      slug
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      publishDate(formatString: "MMMM Do, YYYY")
      id
      locale
      author {
        twitter
        name
        github
      }
      seo {
        description
      }
      hero {
        fluid {
          aspectRatio
          sizes
          src
          srcSet
        }
      }
    }
    home: allDatoCmsHome(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          owner {
            id
            name
            email
            company
            facebook
            github
            twitter
            linkedin
            title
            image {
              title
              fluid(maxWidth: 150) {
                ...GatsbyDatoCmsFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
