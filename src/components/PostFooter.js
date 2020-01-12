import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { colors } from '../assets';

const Wrapper = styled.div`
  background: ${colors.gray20};
  box-sizing: border-box;
  width: 100vw;
`;

export default props => {
  return (
    <Wrapper>
      <Profile type={props.profileType} />
    </Wrapper>
  );
}
