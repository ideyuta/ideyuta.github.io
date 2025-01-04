import React from "react";
import * as motion from "motion/react-client"
import { navigate } from "gatsby"
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: auto;
  height: 600px;
  pointer-events: none;
`;

/**
 * WorkItem
 */
export default function WorkItem(props) {
  const [isDragging, setIsDragging] = React.useState(false);
  return (
    <motion.button
      drag
      dragSnapToOrigin={true}
      layout
      layoutId={props.layoutId}
      transition={{ duration: 1.1, type: "spring" }}
      whileHover={{ scale: 1.03 }}
      onClick={() => {
        if(!isDragging) { navigate(props.to) }
      }}
      onDragStart={() => setIsDragging(true) }
      onDragEnd={() => setIsDragging(false) }
    >
      <Image src={props.src} />
    </motion.button>
  );
}
