import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { Row, Col } from 'reactstrap'

import './blog-post.scss'

function BlogPost(props) {
  const post = props.data.contentfulBlogPost

  return (
    <Layout location={props.location}>
      <SEO title={post.title} description={post.description.description} />
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
    contentfulBlogPost(slug: { eq: $slug }) {
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
