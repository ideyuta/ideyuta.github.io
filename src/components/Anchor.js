import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  padding: 24px 0;
  text-decoration: none;
  transition-property: all;
`;
const Data = styled.p`
  color: #ccc;
  font-size: 1rem;
  font-weight: 400;
  padding: 0;
  margin: 4px 0;
  transition-duration: 0.4s;
`;
const A = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0;
  margin: 4px 0;
  transition-duration: 0.4s;
  &:hover {
    text-decoration: 1.5px underline wavy;
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
