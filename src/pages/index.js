import React from 'react'
import { graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Img from 'gatsby-image'
import Link from 'components/link'
import GithubIcon from 'components/icons/github'
import LinkedinIcon from 'components/icons/linkedin'
import TwitterIcon from 'components/icons/twitter'

import './index.scss'

const PostItem = ({ slug, title, body, description, publishDate }) => {
  return (
    <article itemScope itemType="https://schema.org/CreativeWork">
      <h2 itemProp="headline">
        <Link to={`/blog/${slug}`} rel="permalink">
          {title}
        </Link>
      </h2>
      <div className="page__meta">
        <span>{publishDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{body.childMarkdownRemark.timeToRead} min read</span>
      </div>
      <p itemProp="description">{description.childMarkdownRemark.excerpt}</p>
    </article>
  )
}

class RootIndex extends React.Component {
  render() {
    const site = this.props.data.site.siteMetadata
    const posts = this.props.data.allContentfulBlogPost.edges
    const [{ node: author }] = this.props.data.allContentfulPerson.edges

    const link = [
      { rel: 'home', href: site.siteUrl },
      { rel: 'canonical', href: site.siteUrl },
    ]
    const meta = [{ property: 'og:url', content: site.siteUrl }]

    return (
      <Layout location={this.props.location}>
        <SEO title={site.title} description={author.shortBio.shortBio} link={link} meta={meta} />
        <Row>
          <Col md="3" className={`d-none d-md-block`}>
            <Img
              style={{ maxWidth: 80, borderRadius: '50%' }}
              alt={author.name}
              fluid={author.heroImage.fluid}
            />
            <p className="author__title">{author.title}</p>
            <div>
              <ul className="list-unstyled side-icons">
                <li>
                  <Link to={`https://github.com/${site.social.github}`}>
                    <GithubIcon style={{ width: 18, color: '#222' }} /> <span>Github</span>
                  </Link>
                </li>
                <li>
                  <Link to={`https://twitter.com/${site.social.twitter}`}>
                    <TwitterIcon style={{ width: 18, color: '#222' }} /> <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link to={`https://linkedin.com/in/${site.social.linkedin}`}>
                    <LinkedinIcon style={{ width: 18, color: '#222' }} /> <span>Linkedin</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="9">
            <div style={{ maxWidth: '650px' }}>
              <h3>Posts</h3>
              {posts.map(({ node }) => (
                <PostItem key={node.slug} {...node} />
              ))}
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
          github
          linkedin
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              excerpt
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            title
            fluid(maxWidth: 150, resizingBehavior: PAD, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
