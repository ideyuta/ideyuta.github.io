import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SectionSummary from '../components/SectionSummary';
import Spacer from '../components/Spacer';
import Reaction from '../components/Reaction';
import { colors } from '../assets';

const Date = styled.p`
  color: ${colors.gray500};
`;
const Portrait = styled.img`
  display: block;
  height: 480px;
  object-fit: cover;
  object-position: 50% 80%;
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
            ささっとサイトのコードを書き直したので、じわじわとそだてていきたいなあと思っています。
            <br />
            <Date>
              2019年12月30日 名古屋付近の漫画喫茶にて
            </Date>
          </p>
        </Section>

        <Portrait src="../images/ideyuta.png" />
        <Section bgColor={colors.theme}>

          <Spacer size="small" />

          <SectionSummary
            content="デザイナー"
            title="井出優太 / Yuta Ide"
          />

          <p>略歴 88年静岡県生まれ。多摩美術大学大学院 美術研究科 デザイン専攻 情報デザイン研究領域 経験デザイン修了。美術修士。4歳と1歳の娘がいます。高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。フリーのデザイナーを経て、2013年8月に金融・決済・ITを軸とするベンチャーであるカンムへ入社。CLOの立ち上げからデザインと開発を行い、2016年9月にバンドルカードをリリースしました。2017年3月、カンムを退職し、フリークアウト・ホールディングス子会社のニューライトへ。代表としてSMB向け業務改善事業のあれこれをやっていましたが撤退。2018年11月、heyにてsoiという事業を立ち上げました。最近は社運がかかっていると噂のCoineyとSTORESをつなぐプロジェクトをやっています。</p>
      </Section>
    </Wrapper>
  );
}