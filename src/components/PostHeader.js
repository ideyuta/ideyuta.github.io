import React from "react";
import { withPrefix } from "gatsby-link";
import styled from "styled-components";

const Anchor = styled.a`
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 32px 24px;
  width: 100vw;
  z-index: 0;
`;

export default function Header() {
  return (
    <Wrapper>
      <Anchor href={withPrefix("/")}>ideyuta.com</Anchor>
    </Wrapper>
  );
}
