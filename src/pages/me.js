import React, { useEffect } from "react";
import * as motion from "motion/react-client"
import { Link } from "gatsby"
import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 200px 24px;
  max-width: 800px;
  margin: 0 auto;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  height: auto;
`;
const Label = styled.p`
  font-weight: 600;
`;
const Body = styled.p`
  margin: 0;
`;
const List = styled.ul`
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
  padding: 4px 0;
`;


/**
 * Me
 */
export default function Me() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Header />
      <Wrapper
        initial={{ transform: "translateY(100px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <Image src="/images/ideyuta_202304.png" width="800" height="500" />
        <Label>井出 優太 / Yuta Ide<br />デザイナー<br />STORES, inc. CPO</Label>
        <Body>88年静岡県生まれ。多摩美術大学大学院修了。9歳と6歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。カンム、フリークアウト・ホールディングスを経て、ストアーズに入社。2022年にVP, Product Designに就任。2023年からはChief Product Officerとしていろいろやっています。</Body>
          <List>
            <ListItem><Link to="/inside-the-stores">✏ 2024 ストアーズでのこと</Link></ListItem>
            <ListItem><Link to="/one-fine-day">✏ 2019 ある晴れた日のこと</Link></ListItem>
          </List>
      </Wrapper>
    </>
  );
}
