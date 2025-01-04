import React from "react";
import Helmet from "react-helmet";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import styled from "styled-components";
import Header from "../components/Header";
import WorkItem from "../components/WorkItem";

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
          <WorkItem
            layoutId="works-mobileorder-cover"
            src="/images/works/mobileorder/img01.png"
            to="/works/mobileorder"
          />
        </Container>
        <Container layout layoutId="works-regi-for-service">
          <WorkItem
            layoutId="works-regi-for-service-cover"
            src="/images/works/regi-for-service/img01.png"
            to="/works/regi-for-service"
          />
        </Container>
      </AnimatePresence>
    </div>
  );
}
