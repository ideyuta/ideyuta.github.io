import React from "react";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { Link } from "gatsby"
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: auto;
  height: 600px;
`;

/**
 * Index
 */
export default function Index() {
  return (
    <div>
      <AnimatePresence>
        <Link to="/">back</Link>
        <motion.div layout layoutId="c001">
          <motion.div layoutId="img001">
            <Image src="/images/test01.png" />
          </motion.div>
          <motion.div layout>
            <Image src="/images/test02.png" />
            <Image src="/images/test02.png" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
