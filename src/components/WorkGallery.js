import React from "react";
import { useWindowWidth } from '@react-hook/window-size'
import { useMotionValue, useTransform } from "motion/react"
import * as motion from "motion/react-client"
import { navigate } from "gatsby"
import styled from "styled-components";
import media from "styled-media-query";
import { WORKS } from "../constants/works";

const Image = styled.img`
  display: block;
  width: auto;
  height: 100vw;
  max-height: 80vh;
  pointer-events: none;
  border-radius: 40px;
`;
const ImgContainer = styled(motion.div)`
  flex-shrink: 0;
`;
const Container = styled(motion.div)`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  gap: 80px;
  height: 100vh;
  max-height: 100%;
  padding: 0 8vw 4vh 30vw;
  width: auto;
  ${media.lessThan("520px")`
    padding: 0 24px 4vh 24px;
  `}
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  z-index: 1;
`;

/**
 * WorkGallery
 */
export default function WorkGallery({ workId }) {

  const [containerWidth, setContainerWidth] = React.useState(0);
  const container = React.useRef();
  React.useEffect(() => {
    setContainerWidth(container.current.scrollWidth - container.current.offsetWidth);
  }, [])
  console.log(containerWidth, workId);

  // 初期アニメーションの位置計算に利用
  const width = useWindowWidth();

  // 下にドラッグした時に画像を透過する計算に利用
  const y = useMotionValue(0);
  const opacity = useTransform(
    y,
    [-300, 0, 300],
    [1, 1, 0],
  );

  // 指定された id の画像一覧を作成
  const items = WORKS[workId].items.map((item, index) => {
    if (index === 0) {
      return (
        <ImgContainer
          layoutId={`works-${workId}-cover`}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Image src={item.src} />
        </ImgContainer>
      );
    } else {
      return (
        <ImgContainer
          initial={{ transform: `translateX(${width/3}px)`, opacity: 0 }}
          animate={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ duration: 0.9, type: "spring", delay: index * .1 }}
          style={{ opacity }}
        >
          <Image src={item.src} />
        </ImgContainer>
      );
    }
  });

  return (
    <Wrapper ref={container}>
    <Container
      drag
      dragConstraints={{ right: 0, left: -containerWidth, top: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={(event, info) => {
        if (info.velocity.y >= 10 && info.offset.y >= 100) {
          navigate(`/#${workId}`)
        }
      }}
      layoutId={`works-${workId}`}
      style={{ y }}
    >
      {items}
    </Container>
      </Wrapper>
  );
}
