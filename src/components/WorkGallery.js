import React, { useRef, useLayoutEffect, useState } from "react";
import { useWindowWidth } from '@react-hook/window-size'
import { useScroll, useMotionValue, useTransform } from "motion/react"
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
const Container = styled(motion.button)`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  gap: 80px;
  height: 100vh;
  max-height: 100%;
  width: max-content;
  padding: 0 0 6vh 0;
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  padding: 0 10vw;
  z-index: 1;
`;

/**
 * WorkGallery
 */
export default function WorkGallery({ workId }) {

  const [isDragging, setIsDragging] = useState(false);

  // 初期アニメーションの位置計算に利用
  const width = useWindowWidth();

  // 下にドラッグした時に画像を透過する計算に利用
  const y = useMotionValue(0);
  const opacity = useTransform(
    y,
    [-300, 0, 300],
    [1, 1, 0],
  );

  const [elementWidth, setElementWidth] = useState(0);
  const elementRef = useRef(null);

  // 要素の幅を取得
  useLayoutEffect(() => {
    if (elementRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        // 要素の幅を取得
        const rectWidth = entry.contentRect.width;
        setElementWidth(Math.max(0, rectWidth - width + width*0.2)); // padding をたす
      });
    });
    // elementRef が指す要素を監視
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    // クリーンアップ：監視の停止
    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
    };
    }
  }, []);

  // 横移動の範囲を動的に設定
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -elementWidth]);

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
    <Wrapper>
    <Container
      ref={elementRef}
      drag
      dragSnapToOrigin={true}
      whileTap={{ cursor: "grabbing" }}
      onDragStart={() => setIsDragging(true) }
      onDragEnd={(event, info) => {
        setIsDragging(false);
        if (info.velocity.y >= 10 && info.offset.y >= 100) {
          navigate(`/#${workId}`)
        }
      }}
      onClick={() => {
        if(!isDragging) { navigate(`/#${workId}`) }
      }}
      layoutId={`works-${workId}`}
      style={{ y, x }}
    >
      {items}
    </Container>
      </Wrapper>
  );
}
