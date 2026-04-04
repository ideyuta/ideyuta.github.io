import React from "react";
import styled from "styled-components";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import Header from "../components/Header";
import WorkItem from "../components/WorkItem";
import { WORKS } from "../constants/works";

const Wrapper = styled(motion.div)`
  > :first-child {
    padding-top: 120px;
  }
`;

/**
 * Index
 */
export default function Index() {
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Wrapper>
          {Object.keys(WORKS).map((key) => <WorkItem key={key} workId={key} />)}
        </Wrapper>
      </AnimatePresence>
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>ideyuta.com</title>
      <meta name="description" content="こんにちは、いでです。東京でデザイナーをしています。インタラクションデザインを軸にデザインしたりコードを書いたりしています。" />
    </>
  );
}
