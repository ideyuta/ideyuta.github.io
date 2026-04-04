import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const Wrapper = styled.div`
  background: var(--color-bg-dark);
  box-sizing: border-box;
  width: 100vw;
`;

const PostFooter = (props) => {
  return (
    <Wrapper>
      <Profile type={props.profileType} />
    </Wrapper>
  );
};

export default PostFooter;
