import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

const Content = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;
  word-break: break-all;
`;
const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 400;
  margin: 0;
`;

export default function Template({ data }) {
  const { frontmatter, html } = data.post;
  return (
    <>
    <Helmet
      title={`${frontmatter.title} - ideyuta.com`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: frontmatter.title },
        { property: 'og:type', content: 'blog' },
        { property: 'og:url', content: `http://ideyuta.com${frontmatter.path}` },
        { property: 'og:image', content: `http://ideyuta.com/images${frontmatter.path}/ogp.png` },
        { property: 'og:description', content: '' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@_ideyuta' },
      ]}
    />
      <Header />
      <Content>
        <Title>{frontmatter.title}</Title>
        <Spacer size="regular" />
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        createdAt
        path
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___createdAt], order: ASC }
    ) {
      edges {
        next {
          frontmatter {
            createdAt
            path
            title
          }
        }
        previous {
          frontmatter {
            createdAt
            path
            title
          }
        }
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`;