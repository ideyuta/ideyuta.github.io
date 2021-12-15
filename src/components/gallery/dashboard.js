import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, PresentationControls } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { isMobile } from "react-device-detect";

const Dashboard = (props) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const img = useTexture("/images/gallery/dashboard.png");

  const [light, set] = useState();

  const { scale } = useSpring({
    scale: active ? 1.2 : 1,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current.position.x > 3) {
      ref.current.position.x -= Math.sin(0.005 / t);
    }
    ref.current.rotation.x = Math.sin(t / 10) / 13;
    ref.current.rotation.z = -Math.sin(t / 5) / 10;
  });

  const el = (
    <animated.mesh
      scale={scale}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      ref={ref}
      position={[4, 0, 1]}
    >
      <spotLight
        ref={set}
        intensity={1.4}
        position={[-2, 3, 3]}
        angle={0.26}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      />
      <planeGeometry args={[2, 1.485, 1]} />
      <meshPhongMaterial map={img} transparent={true} />
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

export default Dashboard;
