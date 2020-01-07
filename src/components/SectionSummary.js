import React from 'react';
import styled from 'styled-components';

const Content = styled.p`
  margin: 0;
`;
const Title = styled.h4`
  margin: 0;
`;
const Wrapper = styled.div`
  padding: 24px 0;
`;

export default props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </Wrapper>
  );
}
