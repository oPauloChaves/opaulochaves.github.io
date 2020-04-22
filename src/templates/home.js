import React from 'react'
import { graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'
import Layout from 'components/layout'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Link from 'components/link'
import GithubIcon from 'components/icons/github'
import LinkedInIcon from 'components/icons/linkedin'
import TwitterIcon from 'components/icons/twitter'

import './home.scss'

export default function HomePage({ location, data, pageContext }) {
  const { locale } = pageContext
  const { node: home } = data.home.edges[0]
  const { owner } = home
  const posts = data.posts.edges

  // TODO get from CMS
  const domain = 'https://paulochaves.dev'

  return (
    <Layout location={location} locale={locale} site={owner} langs={['en', 'pt-BR']}>
      <HelmetDatoCms seo={home.seoMetaTags}>
        <link rel="canonical" href={`${domain}`} hreflang="en" />
        <link rel="alternate" href={`${domain}/pt-br`} hreflang="pt-BR" />
      </HelmetDatoCms>
      <Row>
        <Col md="3" className={`d-none d-md-block`}>
          <Img
            style={{ maxWidth: 80, borderRadius: '50%' }}
            alt={owner.name}
            fluid={owner.image.fluid}
          />
          <p className="author__title">{owner.title}</p>
          <div>
            <ul className="list-unstyled side-icons">
              {owner.github && (
                <li>
                  <Link to={`https://github.com/${owner.github}`}>
                    <GithubIcon style={{ width: 18, color: '#222' }} /> <span>Github</span>
                  </Link>
                </li>
              )}
              {owner.twitter && (
                <li>
                  <Link to={`https://twitter.com/${owner.twitter}`}>
                    <TwitterIcon style={{ width: 18, color: '#222' }} /> <span>Twitter</span>
                  </Link>
                </li>
              )}
              {owner.linkedin && (
                <li>
                  <Link to={`https://linkedin.com/in/${owner.linkedin}`}>
                    <LinkedInIcon style={{ width: 18, color: '#222' }} /> <span>LinkedIn</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </Col>
        <Col md="9">
          <div style={{ maxWidth: '650px' }}>
            <h3>Posts</h3>
            {posts.map(({ node }) => node.title && <PostItem key={node.slug} {...node} />)}
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

function PostItem({ slug, title, locale, bodyNode, seo, publishDate }) {
  const body = bodyNode.childMarkdownRemark

  return (
    <article itemScope itemType="https://schema.org/CreativeWork">
      <h2 itemProp="headline">
        <Link to={`${getPrefix(locale)}/blog/${slug}`} rel="permalink">
          {title}
        </Link>
      </h2>
      <div className="page__meta">
        <span>{publishDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{body.timeToRead} min read</span>
      </div>
      <p itemProp="description">{seo.description}</p>
    </article>
  )
}

function getPrefix(locale) {
  return locale === 'en' ? '' : '/pt-br'
}

export const query = graphql`
  query homeQuery($locale: String!) {
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
    posts: allDatoCmsArticle(
      filter: { locale: { eq: $locale } }
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          id
          slug
          title
          locale
          seo {
            description
          }
          publishDate(formatString: "MMMM Do, YYYY")
          bodyNode {
            childMarkdownRemark {
              timeToRead
            }
          }
        }
      }
    }
  }
`
