import React from "react";
import styled from "styled-components";
import "../images/reactions/god_han.gif";
import "../images/reactions/miso_dope.gif";
import "../images/reactions/miso_sama.gif";

const reactions = ["god_han", "miso_dope", "miso_sama"];

const Icon = styled.img`
  display: block;
  height: ${(props) => (props.size || 32) + "px"};
  width: ${(props) => (props.size || 32) + "px"};
`;
const Wrapper = styled.div`
  display: inline-block;
  padding: 0 4px;
`;

const Reaction = (props) => {
  const path = props.random
    ? reactions[Math.floor(Math.random() * reactions.length)]
    : props.name;
  return (
    <Wrapper>
      <Icon size={props.size} src={`../images/reactions/${path}.gif`} />
    </Wrapper>
  );
};

export default Reaction;
