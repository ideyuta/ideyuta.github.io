import React from "react";
import { useWindowWidth } from '@react-hook/window-size'
import { AnimatePresence, LayoutGroup } from "motion/react"
import * as motion from "motion/react-client"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import styled from "styled-components";

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
 * Index
 */
export default function Index() {
  const width = useWindowWidth();
  return (
      <AnimatePresence mode="wait">
        <Container
          drag
          dragSnapToOrigin={true}
           onDragEnd={(event, info) => {
             if (info.velocity.y >= 10 && info.offset.y >= 100) {
              navigate("/")
            }
          }}
          layout
          transition={{ duration: 0 }}
          layoutId="works-mobileorder"
        >
          <Link to="/">back</Link>
            <LayoutGroup>
          <ImgContainer
            layout
            layoutId="works-mobileorder-cover"
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Image src="/images/works/mobileorder/img01.png" />
          </ImgContainer>
          <ImgContainer
            initial={{ transform: `translateX(${width/3}px)`, opacity: 0 }}
            animate={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ duration: 1.1, type: "spring" }}
          >
            <Image src="/images/works/mobileorder/img02.png" />
          </ImgContainer>
          <ImgContainer
            initial={{ transform: `translateX(${width/3}px)`, opacity: 0 }}
            animate={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ duration: 1.3, type: "spring" }}
          >
            <Image src="/images/works/mobileorder/img03.png" />
          </ImgContainer>
          <ImgContainer
            initial={{ transform: `translateX(${width/3}px)`, opacity: 0 }}
            animate={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ duration: 1.6, type: "spring" }}
          >
            <Image src="/images/works/mobileorder/img04.png" />
          </ImgContainer>
            </LayoutGroup>
        </Container>
      </AnimatePresence>
  );
}
