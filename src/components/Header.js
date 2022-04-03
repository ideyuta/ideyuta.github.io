import React from "react";
import { withPrefix } from "gatsby-link";
import styled from "styled-components";

const Anchor = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  letter-spacing: 0.03;
  padding: 4px 0;
  text-decoration: none;
  &:hover {
    text-underline-offset: 3px;
    text-decoration: 1.5px underline wavy;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 32px 24px;
  width: 100vw;
`;

export default function Header() {
  return (
    <Wrapper>
      <Anchor href={withPrefix("/")}>ideyuta.com</Anchor>
    </Wrapper>
  );
}
