import React from "react";
import { withPrefix } from "gatsby-link";
import styled from "styled-components";
import { colors } from "../assets";

const Anchor = styled.a`
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 0.03;
  padding: 4px 0;
  text-decoration: none;
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
