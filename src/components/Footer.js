import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets';

const Wrapper = styled.div`
  background: ${colors.gray20};
  box-sizing: border-box;
  padding: 32px 24px;
  width: 100vw;
`;

export default () => {
  return (
    <Wrapper>
      <p>&copy; ideyuta.com</p>
    </Wrapper>
  );
}
