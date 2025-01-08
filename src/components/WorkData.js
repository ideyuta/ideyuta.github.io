import React from "react";
import styled from "styled-components";
import { WORKS } from "../constants/works";

const Title = styled.p`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding: 32px 0 0 0;
`;
const Client = styled.p`
  padding: 0 0 1rem 0;
  margin: 0;
`;
const Member = styled.p`
  margin: 0;
`;
const Doc = styled.a`
  display: inline-block;
  padding: 1rem 0;
  margin: 0;
`;
const Wrapper = styled.div`
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export default function WorkData({ workId }) {
  const data = WORKS[workId];
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Client>{`${data.date} ${data.client}`}</Client>
      {data.member.map(m => <Member>{m}</Member>)}
      {data.docs && data.docs.map(d => <Doc href={d.href}>✏ JOURNAL</Doc>)}
    </Wrapper>
  );
}
