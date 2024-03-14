import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  padding: 12px 0;
  text-decoration: none;
`;
const Data = styled.p`
  color: #bbb;
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
    text-decoration: none;
  }
  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 3px;
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
