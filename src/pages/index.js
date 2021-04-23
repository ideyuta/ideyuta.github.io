import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Anchor from '../components/Anchor';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SectionSummary from '../components/SectionSummary';
import Spacer from '../components/Spacer';
import Reaction from '../components/Reaction';
import { colors } from '../assets';

const Line = styled.div`
  background: ${colors.gray100};
  height: 1px;
  width: 100%;
`;
const Date = styled.p`
  color: ${colors.gray500};
`;
const Portrait = styled.img`
  display: block;
  height: 480px;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
    max-width: 100vw;
    width: 100vw;
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
            content: 'こんにちは、いでです。東京でデザイナーをしています。インタラクションデザインを軸にデザインしたりコードを書いたりしています。',
            name: 'description'
          }
        ]}
        title="ideyuta.com"
      />
      <Header />
      <Section>
        <SectionHeader>
          <Reaction random size="16" />
        </SectionHeader>
        <p>
          こんにちは、いでです。
          <br />
          最近はイケてる電動自転車を手に入れたので道を爆走してます。
          <br />
          <Date>
            2020年12月6日
          </Date>
        </p>
      </Section>

      <Portrait src="../images/ideyuta.jpg" />
      <Section bgColor={colors.theme}>

        <Spacer size="small" />

        <SectionSummary
          content="デザイナー"
          title="井出 優太 / Yuta Ide"
        />

          <p>略歴　88年静岡県生まれ。多摩美術大学大学院 情報デザイン研究領域修了。5歳と2歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。フリーのデザイナーを経て、2013年にカンムへ入社。2016年にバンドルカードをリリースしました。2017年カンムを退職し、フリークアウト・ホールディングス子会社のニューライトへ。代表としてSMB向け業務改善事業のあれこれをやっていましたが撤退。2018年、heyにてsoiという事業を立ち上げました。最近は別の新規事業を立ち上げたり、STORES全プロダクトのデザインリードをやっていたりします。</p>
        <Spacer size="medium" />
      </Section>

      <Section>
        <SectionHeader>
          PROJECTS
        </SectionHeader>
        <Anchor
          date="2020"
          label="ヘイ"
          path="stores_dashboard_new_design"
          title="STORESのダッシュボードをリニューアルしました"
        />
        <Line />
        <Anchor
          date="2019"
          label="ヘイ"
          path="soi"
          title="soiの記録"
        />
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
        <SectionHeader>
          SOFAR
        </SectionHeader>
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
