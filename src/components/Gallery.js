import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, MapControls } from "@react-three/drei";
import styled from "styled-components";
import Regi from "./gallery/regi";
import Dashboard from "./gallery/dashboard";
import Soi from "./gallery/soi";
import VandleCard from "./gallery/vandlecard";

const Wrapper = styled.div`
  cursor: grab;
  background: #f2f2ee;
  height: 86vh;
  width: 100vw;
  p::selection {
    background-color: transparent;
  }
`;

const Gallery = ({ height }) => {
  return (
    <Wrapper style={{ height: height ? height * 0.86 : "86vh" }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <MapControls panSpeed={1.6} enableZoom={false} enableRotate={false} />
          <hemisphereLight intensity={3.5} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.8, 0]}
            opacity={1}
            width={20}
            height={20}
            blur={2.6}
            far={2}
          />
          <Regi />
          <Dashboard />
          <Soi />
          <VandleCard />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default Gallery;
