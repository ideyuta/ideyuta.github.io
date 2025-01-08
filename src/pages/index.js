import React from "react";
import Helmet from "react-helmet";
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
        <Wrapper
          initial={{ transform: "translateY(100px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ type: "spring" }}
        >
          {Object.keys(WORKS).map((key) => <WorkItem workId={key} />)}
        </Wrapper>
      </AnimatePresence>
    </div>
  );
}
