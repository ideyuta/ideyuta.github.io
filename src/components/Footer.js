import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
