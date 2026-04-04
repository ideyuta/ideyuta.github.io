import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
const Wrapper = styled.div`
  background: var(--color-gray-900);
  height: 76vh;
  width: 100vw;
  p::selection {
    background-color: transparent;
  }
`;

const GalleryWrapper = () => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    let h = window.innerHeight;
    if (h) {
      h = Math.floor(h * 0.76);
    } else {
      h = "76vh";
    }
    setHeight(h);
  }, []);

  return (
    <Wrapper style={{ height }}>
      <Gallery height={height} />
    </Wrapper>
  );
};

export default GalleryWrapper;
