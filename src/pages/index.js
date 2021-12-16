import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Anchor from "../components/Anchor";
import Footer from "../components/Footer";
import GalleryWrapper from "../components/GalleryWrapper";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Spacer from "../components/Spacer";
import { colors } from "../assets";

const Line = styled.div`
  background: ${colors.gray100};
  height: 1px;
  width: 100%;
`;
const LightText = styled.p`
  color: ${colors.gray100};
`;
const Strong = styled.span`
  font-weight: bold;
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
      <Section bgColor="#00454E">
        <img alt="ideyuta" src="/images/ideyuta_2021.png" />
        <Spacer size="small" />

        <LightText>
          <Strong>井出 優太 / Yuta Ide</Strong>
        </LightText>
        <LightText>
          <Strong>
            デザイナー
            <br />
            hey / Head of Product Design
          </Strong>
        </LightText>

        <LightText>
          88年静岡県生まれ。多摩美術大学大学院
          情報デザイン研究領域修了。6歳と3歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。フリーのデザイナーを経て、2013年にカンムへ入社。2016年にバンドルカードをリリースしました。2017年カンムを退職し、フリークアウト・ホールディングス子会社のニューライトへ。SMB向け業務改善事業のあれこれをやっていましたが撤退。2018年、heyにてsoiという事業を立ち上げましたが2019年にクローズ。その後STORESレジのプロジェクトリーダー/リードデザイナーをつとめ、2021年6月にリリース。最近はSTORESプラットフォーム全体のデザインリードをやっていたりします。
        </LightText>
        <Spacer size="medium" />
      </Section>

      <Section>
        <SectionHeader>PROJECTS</SectionHeader>
        <Anchor
          date="2021"
          label="ヘイ"
          path="stores_regi"
          title="STORESレジができるまで"
        />
        <Line />
        <Anchor
          date="2020"
          label="ヘイ"
          path="stores_dashboard_new_design"
          title="STORESのダッシュボードをリニューアルしました"
        />
        <Line />
        <Anchor date="2019" label="ヘイ" path="soi" title="soiの記録" />
        <Line />
        <Anchor
          date="2016"
          label="カンム"
          path="vandlecard"
          title="バンドルカードができるまで"
        />
        <Line />
        <Anchor
          date="2008-2011"
          label="学生"
          path="mediaart"
          title="学生時代に制作したメディアアートたち"
        />
      </Section>

      <Section>
        <SectionHeader>SOFAR</SectionHeader>
        <Anchor
          date="2020"
          label="ヒストリー"
          path="one_fine_day"
          title="ある晴れた日のこと"
        />
      </Section>

      <Spacer size="large" />

      <Footer />
    </Wrapper>
  );
}
