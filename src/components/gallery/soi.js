import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture, PresentationControls } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { isMobile } from "react-device-detect";

const Soi = (props) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const img = useTexture("/images/gallery/soi.png");

  const [light, set] = useState();

  const { scale } = useSpring({
    scale: active ? 1.2 : 1,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current.position.x > 5.5) {
      ref.current.position.x -= Math.sin(0.005 / t);
    }
    ref.current.rotation.x = -Math.sin(t / 10) / 4;
    ref.current.rotation.y = -Math.sin(t / 10) / 10;
    ref.current.rotation.z = -Math.sin(t / 5) / 10;
  });

  const el = (
    <animated.mesh
      scale={scale}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      ref={ref}
      position={[6.5, 0, 1]}
    >
      <spotLight
        ref={set}
        intensity={2.2}
        position={[-4, -4, 5]}
        angle={0.12}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      />
      {!isMobile && active && (
        <Html scale={0.1} position={[0, -1.15, 0]} transform occlude>
          <p style={{ color: "#00454E" }}>soi - 2018</p>
        </Html>
      )}
      <planeGeometry args={[1, 2.03, 1]} />
      <meshStandardMaterial metalness={.8} map={img} transparent={true} />
      {light && <primitive object={light.target} position={[0.5, 0, 0]} />}
    </animated.mesh>
  );

  if (isMobile) {
    return el;
  }
  return (
    <PresentationControls
      snap={true}
      config={{ mass: 1, tension: 170, friction: 26 }}
    >
      {el}
    </PresentationControls>
  );
};

export default Soi;
