import React from "react";
import * as motion from "motion/react-client"
import { withPrefix } from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 80px 24px;
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
const Anchor = styled.a`
  color: #333 !important;
  text-underline-offset: 3px;
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
  return (
    <>
      <Header />
      <Wrapper
        initial={{ transform: "translateY(-100px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <Image src="/images/ideyuta_202304.png" width="800" height="500" />
        <Label>井出 優太 / Yuta Ide<br />デザイナー<br />STORES, inc. CPO</Label>
        <Body>88年静岡県生まれ。多摩美術大学大学院 情報デザイン研究領域修了。9歳と6歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。フリーのデザイナーを経て2013年にカンムへ入社。バンドルカードのデザインと開発を担当しました。2017年カンムを退職し、フリークアウト・ホールディングス子会社のニューライトへ。SMB向け業務改善事業のあれこれをやっていましたが撤退。2018年、STORESに入社しsoiという事業を立ち上げましたが2019年にクローズ。その後、STORES レジのプロジェクトリード、STORES 全体のデザインリードを経て、2022年にVP, Product Designに就任。2023年からはChief Product Officerとしていろいろやっています。</Body>
          <List>
            <ListItem><Anchor href={withPrefix("/inside-the-stores")}>✏ 2024 ストアーズでのこと</Anchor></ListItem>
            <ListItem><Anchor href={withPrefix("/one-fine-day")}>✏ 2019 ある晴れた日のこと</Anchor></ListItem>
          </List>
      </Wrapper>
    </>
  );
}
