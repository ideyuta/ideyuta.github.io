import React from "react";
import { graphql } from "gatsby";
import * as motion from "motion/react-client";
import styled from "styled-components";
import Footer from "../components/Footer";
import PostHeader from "../components/PostHeader";
import PostFooter from "../components/PostFooter";
import Spacer from "../components/Spacer";

const Content = styled(motion.div)`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;
  word-break: break-all;
`;
const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  margin: 40px 0 0 0;
`;

export default function Template({ data }) {
  React.useEffect(() => window.scrollTo(0, 0), []);

  if (!data.post) {
    return <div>Post not found</div>;
  }

  const { frontmatter, html } = data.post;
  return (
    <>
      <PostHeader />
      <Content
        initial={{ transform: "translateY(100px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <Title>{frontmatter.title}</Title>
        <Spacer size="regular" />
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
      <Spacer size="large" />
      <PostFooter profileType={frontmatter.type} />
      <Footer />
    </>
  );
}

export function Head({ data }) {
  if (!data.post) return null;
  const { frontmatter } = data.post;
  return (
    <>
      <title>{`${frontmatter.title} - ideyuta.com`}</title>
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:type" content="blog" />
      <meta
        property="og:url"
        content={`https://ideyuta.com${frontmatter.path}`}
      />
      <meta
        property="og:image"
        content={`https://ideyuta.com/images${frontmatter.path}/ogp.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_ideyuta" />
    </>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        createdAt
        path
        type
        title
      }
    }
  }
`;
