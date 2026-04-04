import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--color-bg-dark);
  box-sizing: border-box;
  color: var(--color-bg);
  padding: 32px 24px;
  width: 100vw;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; ideyuta.com</p>
    </Wrapper>
  );
};

export default Footer;
