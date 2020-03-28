import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Watcher from '../components/icons/watcher';
import { Row, Col } from 'reactstrap';

function BlogPost(props) {
  const post = get(props, 'data.contentfulBlogPost');

  return (
    <Layout location={props.location}>
      <SEO title={post.title} description={post.description.description} />
      <article style={{ maxWidth: '650px', margin: '20px auto' }}>
        <div>
          <header>
            <h1>{post.title}</h1>
            <div>
              <span>{post.publishDate} &nbsp;&nbsp;</span>
              <Watcher style={{ width: 15 }} />
              &nbsp;&nbsp;
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
  );
}

export default BlogPost;

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
`;
