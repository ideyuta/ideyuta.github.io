import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import media from "styled-media-query";
import Anchor from "../components/Anchor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Spacer from "../components/Spacer";

const ProfileImg = styled.img`
  animation: fadein 600ms ease-out forwards;
  aspect-ratio: attr(width) / attr(height);
  display: block;
  border-radius: 1% / 2%;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  height: auto;
  ${media.lessThan("800px")`
    border-radius: 0;
  `}
`;
const GallerySection = styled.div`
  width: 100%;
`;
const GalleryImage = styled.img`
  animation: fadein 600ms ease-out forwards;
  aspect-ratio: attr(width) / attr(height);
  background: #f5f5f5;
  box-sizing: border-box;
  border-radius: 1% / 2%;
  display: block;
  max-width: 800px;
  margin: 8px auto;
  width: 100%;
  height: auto;
  ${media.lessThan("800px")`
    border-radius: 0;
  `}
`;
const LightText = styled.p`
  color: #333;
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
      <Header />
        <ProfileImg alt="ideyuta" src="/images/ideyuta_202304.png" width="800" height="500" />
      <Section>
        <Spacer size="small" />

        <LightText>
          <Strong>井出 優太 / Yuta Ide</Strong>
        </LightText>
        <LightText>
          <Strong>
            デザイナー
            <br />
            STORES, inc. CPO
          </Strong>
        </LightText>

        <LightText>
          88年静岡県生まれ。多摩美術大学大学院 情報デザイン研究領域修了。8歳と5歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。フリーのデザイナーを経て2013年にカンムへ入社。バンドルカードのデザインと開発を担当しました。2017年カンムを退職し、フリークアウト・ホールディングス子会社のニューライトへ。SMB向け業務改善事業のあれこれをやっていましたが撤退。2018年、hey(現STORES)にてsoiという事業を立ち上げましたが2019年にクローズ。その後、STORES レジのプロジェクトリード、STORES 全体のデザインリードを経て、2022年にVP, Product Designに就任。2023年からはChief Product Officerとしていろいろやっています。
        </LightText>
        <Spacer size="medium" />
      </Section>

      <GallerySection>
        <GalleryImage alt="STORESレジ v2.0" src="/images/gallery/stores_regi_for_service.png" width="800" height="500" />
        <GalleryImage alt="STORESレジ" src="/images/gallery/stores_regi.png" width="800" height="500" />
        <GalleryImage alt="STORESダッシュボード" src="/images/gallery/stores_dashboard.png" width="800" height="500" />
        <GalleryImage alt="soi" src="/images/gallery/soi.png" width="800" height="500" />
        <GalleryImage alt="バンドルカード" src="/images/gallery/vandlecard.png" width="800" height="500" />
      </GallerySection>

      <Section>
        <SectionHeader>PROJECTS</SectionHeader>
        <Anchor
          date="2021"
          label="STORES"
          path="stores-regi"
          title="STORES レジができるまで"
        />
        <Anchor
          date="2020"
          label="STORES"
          path="stores-dashboard-new-design"
          title="STORES のダッシュボードをリニューアルしました"
        />
        <Anchor date="2019" label="STORES" path="soi" title="soi の記録" />
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
          date="2024"
          label="ヒストリー"
          path="inside-the-stores"
          title="ストアーズでのこと"
        />
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
