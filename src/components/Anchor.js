import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../assets";

const A = styled(Link)`
  display: block;
  padding: 32px 0;
  text-decoration: none;
  transition-duration: 0.7s;
  transition-property: all;
  &:hover {
    background: ${colors.gray20};
    transition-duration: 0.4s;
  }
`;
const Data = styled.h3`
  color: ${colors.gray400};
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0;
  margin: 12px 0 4px 0;
`;
const Date = styled.span`
  display: inline-block;
  border: 1px solid ${colors.gray300};
  border-width: 0 0 0 1px;
  padding: 0 0 0 8px;
  margin: 0 0 0 8px;
  letter-spacing: 0.02em;
`;
const Title = styled.h3`
  color: ${colors.gray900};
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0;
  margin: 12px 0 4px 0;
`;

const Anchor = (props) => {
  return (
    <A to={props.path}>
      <Title>{props.title}</Title>
      <Data>
        {props.label}
        <Date>{props.date}</Date>
      </Data>
    </A>
  );
};

export default Anchor;
