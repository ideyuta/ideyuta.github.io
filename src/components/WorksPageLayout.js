import React from "react";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import styled from "styled-components";
import WorkGallery from "./WorkGallery";
import WorkData from "./WorkData";
import { WORKS } from "../constants/works";

const Container = styled(motion.div)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  height: 50vw;
`;

/**
 * Index
 */
export default function Index({ workId }) {
  const items = Object.keys(WORKS).map((key) => {
    if (key === workId) {
      return (
        <>
        <WorkGallery workId={key} />
        <Container />
        </>
      );
    }
    return (
      <Container layoutId={`works-${key}`}>
        <motion.button layoutId={`works-${key}-cover`}/>
      </Container>
    );
  });
  return (
    <AnimatePresence mode="wait">
      <WorkData workId={workId} />
      {items}
    </AnimatePresence>
  );
}
