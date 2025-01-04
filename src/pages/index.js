import React from "react";
import Helmet from "react-helmet";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { navigate } from "gatsby"
import styled from "styled-components";
import Header from "../components/Header";

const Image = styled.img`
  display: block;
  width: auto;
  height: 600px;
  pointer-events: none;
`;
const Container = styled(motion.div)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;


/**
 * Index
 */
export default function Index() {
  const [isDragging, setIsDragging] = React.useState(false);
  return (
    <div>
      <Helmet
        meta={[
          {
            content:
              "こんにちは、いでです。東京でデザイナーをしています。インタラクションデザインを軸にデザインしたりコードを書いたりしています。",
            name: "description",
          },
        ]}
        title="ideyuta.com"
      />
      <Header />
      <AnimatePresence mode="wait">
        <Container layout layoutId="works-mobileorder">
          <motion.button
            drag
            dragSnapToOrigin={true}
            layout
            layoutId="works-mobileorder-cover"
            transition={{ duration: 1.1, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              if(!isDragging) { navigate("/works/mobileorder") }
            }}
            onDragStart={() => setIsDragging(true) }
            onDragEnd={() => setIsDragging(false) }
          >
            <Image src="/images/works/mobileorder/img01.png" />
          </motion.button>
        </Container>
        <Container layout layoutId="works-regi2">
            <motion.div layout layoutId="works-regi2-cover">
          <Image src="/images/test01.png" />
            </motion.div>
        </Container>
      </AnimatePresence>
    </div>
  );
}
