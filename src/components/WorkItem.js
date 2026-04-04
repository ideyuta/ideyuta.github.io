import React from "react";
import * as motion from "motion/react-client";
import { navigate, prefetchPathname } from "gatsby";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: auto;
  height: 50vw;
  pointer-events: none;
`;
const Container = styled(motion.div)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  height: 50vw;
  position: relative;
  z-index: 0;
`;

/**
 * WorkItem
 */
export default function WorkItem({ workId, index = 0, skipAnimation = false }) {
  const [isDragging, setIsDragging] = React.useState(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
  return (
    <Container
      layoutId={`works-${workId}`}
      id={workId}
      style={{ zIndex: skipAnimation ? 10 : 0 }}
      initial={skipAnimation ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: skipAnimation ? 0 : index * 0.08 }}
    >
      <motion.button
        layoutId={`works-${workId}-cover`}
        transition={{ duration: 1.1, type: "spring" }}
        onClick={() => {
          if (!isDragging) {
            sessionStorage.setItem("lastWorkId", workId);
            navigate(`/works/${workId}`);
          }
        }}
        {...(!isMobile && {
          layoutScroll: true,
          drag: true,
          dragSnapToOrigin: true,
          whileHover: { scale: 1.03 },
          onHoverStart: () => prefetchPathname(`/works/${workId}`),
          onDragStart: () => setIsDragging(true),
          onDragEnd: () => setIsDragging(false),
        })}
      >
        <Image src={`/images/works/${workId}/img01.png`} />
      </motion.button>
    </Container>
  );
}
