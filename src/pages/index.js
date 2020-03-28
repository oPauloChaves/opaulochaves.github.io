import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styles from './index.module.css';
import { Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Link from '../components/link';
import Watcher from '../components/icons/watcher';
import GithubIcon from '../components/icons/github';
import LinkedinIcon from '../components/icons/linkedin';
import TwitterIcon from '../components/icons/twitter';

const PostItem = ({ slug, title, body, description, publishDate }) => {
  return (
    <article className={styles.archive__item} itemScope itemType="https://schema.org/CreativeWork">
      <h2 className={styles.archive__item_title} itemProp="headline">
        <Link to={`/blog/${slug}`} rel="permalink">
          {title}
        </Link>
      </h2>
      <p className={styles.page__meta}>
        <span>{publishDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Watcher style={{ width: 10 }} />
        <span>{body.childMarkdownRemark.timeToRead} min read</span>
      </p>
      <p className={styles.archive__item_excerpt} itemProp="description">
        {description.childMarkdownRemark.excerpt}
      </p>
    </article>
  );
};

class RootIndex extends React.Component {
  render() {
    const site = get(this, 'props.data.site.siteMetadata');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const [{ node: author }] = get(this, 'props.data.allContentfulPerson.edges');

    return (
      <Layout location={this.props.location}>
        <SEO title={site.title} description={author.shortBio.shortBio} />
        <Row>
          <Col md={{ size: 2, offset: 1 }} className={`d-none d-md-block ${styles.author}`}>
            <Img
              style={{ maxWidth: 80, borderRadius: '50%' }}
              alt={author.name}
              fluid={author.heroImage.fluid}
            />
            <div className={styles.authorName}>
              <h3>{author.name}</h3>
            </div>
            <div className={styles.authorTitle}>
              <p>{author.title}</p>
            </div>
            <div className={styles.author__links}>
              <ul className="list-unstyled">
                <li>
                  <Link to={`https://github.com/${site.social.github}`}>
                    <GithubIcon style={{ width: 15, color: '#222' }} /> Github
                  </Link>
                </li>
                <li>
                  <Link to={`https://twitter.com/${site.social.twitter}`}>
                    <TwitterIcon style={{ width: 15, color: '#222' }} /> Twitter
                  </Link>
                </li>
                <li>
                  <Link to={`https://linkedin.com/in/${site.social.linkedin}`}>
                    <LinkedinIcon style={{ width: 15, color: '#222' }} /> Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="9">
            <div style={{ maxWidth: '650px' }}>
              <h3 className={styles.recentPosts}>Recent Posts</h3>
              {posts.map(({ node }) => (
                <PostItem key={node.slug} {...node} />
              ))}
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
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
`;
