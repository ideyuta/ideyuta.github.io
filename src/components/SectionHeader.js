import React from "react";
import styled from "styled-components";

const Head = styled.h2`
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px 0 32px 0;
  position: relative;
  left: -16px;
  width: 100vw;
`;

const SectionHeader = (props) => {
  return (
    <Wrapper>
      <Head>{props.children}</Head>
    </Wrapper>
  );
};

export default SectionHeader;
