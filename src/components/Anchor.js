import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  padding: 12px 0;
  text-decoration: none;
`;
const Data = styled.p`
  color: var(--color-text-subtle);
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
const A = styled(Link)`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  &:link {
    color: var(--color-text);
    text-decoration-line: underline;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 3px;
  }
  &:visited {
    color: var(--color-text);
  }
  &:hover {
    color: var(--color-accent);
    text-decoration: none;
  }
`;

const Anchor = (props) => {
  return (
    <Wrapper>
      <A to={props.path}>{props.title}</A>
      <Data>
        {props.label} | {props.date}
      </Data>
    </Wrapper>
  );
};

export default Anchor;
