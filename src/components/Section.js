import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  padding: 16px 36px;
  word-break: break-all;
`;
const Wrapper = styled.div`
  background: ${(props) => props.bgColor || "#fff"};
  padding: 0;
  width: 100%;
`;

const Section = (props) => {
  return (
    <Wrapper bgColor={props.bgColor}>
      <Inner>{props.children}</Inner>
    </Wrapper>
  );
};

export default Section;
