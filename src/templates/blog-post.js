import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { Row, Col } from 'reactstrap'

import './blog-post.scss'

function BlogPost(props) {
  const post = props.data.contentfulBlogPost
  const site = props.data.site.siteMetadata

  const link = [
    { rel: 'home', href: site.siteUrl },
    { rel: 'canonical', href: `${site.siteUrl}/blog/${post.slug}` },
  ]
  const meta = [{ property: 'og:url', content: `${site.siteUrl}/blog/${post.slug}` }]

  return (
    <Layout location={props.location}>
      <SEO title={post.title} description={post.description.description} link={link} meta={meta} />
      <article className="blog__article">
        <div>
          <header>
            <h1>{post.title}</h1>
            <div className="blog__meta">
              <span>{post.publishDate}</span>
              <span>{post.body.childMarkdownRemark.timeToRead} min read</span>
            </div>
          </header>
        </div>
        <section
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      publishDate(formatString: "MMMM Do, YYYY")
      tags
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      description {
        description
      }
    }
  }
`
