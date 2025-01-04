import React from "react";
import { AnimatePresence } from "motion/react"
import styled from "styled-components";
import WorkGallery from "../../components/WorkGallery";

/**
 * Index
 */
export default function Index() {
  return (
    <AnimatePresence mode="wait">
      <WorkGallery id="regi-for-service" />
    </AnimatePresence>
  );
}
