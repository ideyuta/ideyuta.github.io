import React from "react";
import Helmet from "react-helmet";
import { AnimatePresence } from "motion/react"
import Header from "../components/Header";
import WorkItem from "../components/WorkItem";
import { WORKS } from "../constants/works";


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
        {Object.keys(WORKS).map((key) => <WorkItem workId={key} />)}
      </AnimatePresence>
    </div>
  );
}
