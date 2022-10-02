import React from "react";
import { withPrefix } from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Anchor from "../components/Anchor";
import Footer from "../components/Footer";
import GalleryWrapper from "../components/GalleryWrapper";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Spacer from "../components/Spacer";

const LogoMark = styled.img`
  height: 40px;
  width: 40px;
  fill: #fff;
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0 48px 0;
`;
const ProfileImg = styled.img`
  display: block;
  border-radius: 6% /8%;
`;
const LightText = styled.p`
  color: #fff;
`;
const Strong = styled.span`
  font-weight: 600;
`;
const Wrapper = styled.div`
  overflow: hidden;
  height: auto;
  width: 100vw;
`;

/**
 * Index
 */
export default function Index() {
  return (
    <Wrapper>
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
      <GalleryWrapper />
      <Section bgColor="#0066FF">
        <Logo href={withPrefix("/")}>
          <LogoMark src="/images/logomark.png" />
        </Logo>
        <ProfileImg alt="ideyuta" src="/images/ideyuta_202204.jpg" />
        <Spacer size="small" />

        <LightText>
          <Strong>井出 優太 / Yuta Ide</Strong>
        </LightText>
        <LightText>
          <Strong>
            デザイナー
            <br />
            STORES, inc. VP of Product Design
          </Strong>
        </LightText>

        <LightText>
          88年静岡県生まれ。多摩美術大学大学院
          情報デザイン研究領域修了。7歳と3歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。フリーのデザイナーを経て、2013年にカンムへ入社。バンドルカードのデザインと開発を担当しました。2017年カンムを退職し、フリークアウト・ホールディングス子会社のニューライトへ。SMB向け業務改善事業のあれこれをやっていましたが撤退。2018年、heyにてsoiという事業を立ち上げましたが2019年にクローズ。その後、プロダクトオーナーとしてレジプロジェクトを立ち上げ、2021年6月にSTORES レジをリリースしました。STORES プラットフォーム全体のデザインリードを経て、2022年4月にVP of Product Designに就任していろいろやっています。
        </LightText>
        <Spacer size="medium" />
      </Section>

      <Section>
        <SectionHeader>PROJECTS</SectionHeader>
        <Anchor
          date="2021"
          label="ヘイ"
          path="stores-regi"
          title="STORES レジができるまで"
        />
        <Anchor
          date="2020"
          label="ヘイ"
          path="stores-dashboard-new-design"
          title="STORES のダッシュボードをリニューアルしました"
        />
        <Anchor date="2019" label="ヘイ" path="soi" title="soi の記録" />
        <Anchor
          date="2016"
          label="カンム"
          path="vandlecard"
          title="バンドルカードができるまで"
        />
        <Anchor
          date="2008-2011"
          label="学生"
          path="mediaart"
          title="学生時代に制作したメディアアート"
        />
      </Section>

      <Section>
        <SectionHeader>SOFAR</SectionHeader>
        <Anchor
          date="2020"
          label="ヒストリー"
          path="one-fine-day"
          title="ある晴れた日のこと"
        />
      </Section>

      <Spacer size="large" />

      <Footer />
    </Wrapper>
  );
}
