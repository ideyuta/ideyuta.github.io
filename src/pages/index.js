import React from "react";
import styled from "styled-components";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
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
  const [lastWorkId] = React.useState(() => {
    if (typeof sessionStorage === "undefined") return null;
    const id = sessionStorage.getItem("lastWorkId");
    if (id) sessionStorage.removeItem("lastWorkId");
    return id;
  });
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Wrapper>
          {Object.keys(WORKS).map((key, i) => (
            <WorkItem
              key={key}
              workId={key}
              index={i}
              skipAnimation={key === lastWorkId}
            />
          ))}
        </Wrapper>
      </AnimatePresence>
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>ideyuta.com</title>
      <meta
        name="description"
        content="こんにちは、いでです。東京でデザイナーをしています。インタラクションデザインを軸にデザインしたりコードを書いたりしています。"
      />
    </>
  );
}
