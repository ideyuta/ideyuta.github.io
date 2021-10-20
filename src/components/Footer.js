import React from "react";
import styled from "styled-components";
import { colors } from "../assets";

const Wrapper = styled.div`
  background: ${colors.gray20};
  box-sizing: border-box;
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
