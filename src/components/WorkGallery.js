import React from "react";
import { useWindowWidth } from '@react-hook/window-size'
import { LayoutGroup, useMotionValue, useTransform } from "motion/react"
import * as motion from "motion/react-client"
import { navigate } from "gatsby"
import styled from "styled-components";
import { WORKS } from "../constants/works";

const Image = styled.img`
  display: block;
  width: auto;
  height: 600px;
  pointer-events: none;
`;
const ImgContainer = styled(motion.div)`
  flex-shrink: 0;
`;
const Container = styled(motion.div)`
  width: auto;
  display: flex;
  gap: 40px;
  align-items: center;
  height: 100vh;
  max-height: 100%;
`;

/**
 * WorkGallery
 */
export default function WorkGallery(props) {

  // 初期アニメーションの位置計算に利用
  const width = useWindowWidth();

  // 下にドラッグした時に画像を透過する計算に利用
  const y = useMotionValue(0);
  const opacity = useTransform(
    y,
    [-300, 0, 300],
    [1, 1, 0],
  );

  // 指定された ID の画像一覧を作成
  const items = WORKS[props.id].items.map((work, index) => {
    if (index === 0) {
      return (
        <ImgContainer
          layoutId={`works-${props.id}-cover`}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Image src={work.src} />
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
          <Image src={work.src} />
        </ImgContainer>
      );
    }
  });

  return (
    <Container
      drag
      dragSnapToOrigin={true}
      onDragEnd={(event, info) => {
        if (info.velocity.y >= 10 && info.offset.y >= 100) {
          navigate("/")
        }
      }}
      layout
      transition={{ duration: 0 }} // 全体のアニメーションを防ぐために必要
      layoutId={`works-${props.id}`}
      style={{ y }}
    >
      <LayoutGroup>
        {items}
      </LayoutGroup>
    </Container>
  );
}
