import React from "react";
import { withPrefix } from "gatsby-link";
import styled from "styled-components";

const Anchor = styled.a`
  color: #333 !important;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: .06em;
  padding: 4px 0;
  text-decoration: none;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 32px 24px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export default function Header() {
  return (
    <Wrapper>
      <Anchor href={withPrefix("/")}>ideyuta.com</Anchor>
    </Wrapper>
  );
}
