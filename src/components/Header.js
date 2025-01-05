import React from "react";
import { withPrefix } from "gatsby-link";
import styled from "styled-components";

const Anchor = styled.a`
  color: #333 !important;
  display: inline;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
`;

const AnchorMe = styled.a`
  color: #999 !important;
  display: inline;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 24px;
  width: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default function Header() {
  return (
    <Wrapper>
      <Anchor href={withPrefix("/")}>ideyuta.com</Anchor>
      <AnchorMe href={withPrefix("/me")}>me</AnchorMe>
    </Wrapper>
  );
}
