import React from "react";
import * as motion from "motion/react-client"
import { navigate } from "gatsby"
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
  padding: 40px 0;
  height: 50vw;
  position: relative;
  z-index: 0;
`;

/**
 * WorkItem
 */
export default function WorkItem({ workId }) {
  const [isDragging, setIsDragging] = React.useState(false);
  return (
    <Container
      layoutId={`works-${workId}`}
      id={workId}
    >
      <motion.button
        drag
        dragSnapToOrigin={true}
        layoutId={`works-${workId}-cover`}
        transition={{ duration: 1.1, type: "spring" }}
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          if(!isDragging) { navigate(`/works/${workId}`) }
        }}
        onDragStart={() => setIsDragging(true) }
        onDragEnd={() => setIsDragging(false) }
      >
        <Image src={`/images/works/${workId}/img01.png`} />
      </motion.button>
    </Container>
  );
}
