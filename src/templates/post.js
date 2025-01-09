import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as motion from "motion/react-client"
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
  const { frontmatter, html } = data.post;
  return (
    <>
      <Helmet
        title={`${frontmatter.title} - ideyuta.com`}
        meta={[
          { name: "description", content: "" },
          { property: "og:title", content: frontmatter.title },
          { property: "og:type", content: "blog" },
          {
            property: "og:url",
            content: `https://ideyuta.com${frontmatter.path}`,
          },
          {
            property: "og:image",
            content: `https://ideyuta.com/images${frontmatter.path}/ogp.png`,
          },
          { property: "og:description", content: "" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:site", content: "@_ideyuta" },
        ]}
      />
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
