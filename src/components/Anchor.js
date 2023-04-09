import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  padding: 12px 0;
  text-decoration: none;
  transition-property: all;
`;
const Data = styled.p`
  color: #bbb;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
  transition-duration: 0.4s;
`;
const A = styled(Link)`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  transition-duration: 0.4s;
  &:hover {
    text-decoration: 1.5px underline;
    text-underline-offset: 3px;
    transition-duration: 0.4s;
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
