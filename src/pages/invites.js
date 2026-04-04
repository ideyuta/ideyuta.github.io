import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
const A = styled.a`
  &:link {
    color: var(--color-text);
    border-bottom: 1px solid var(--color-text);
  }
  &:visited {
    color: var(--color-text);
    border-bottom: 1px solid var(--color-text);
  }
  &:hover {
    color: var(--color-theme);
    border-bottom: 1px solid var(--color-theme);
  }
  &:active {
    color: var(--color-text);
    border-bottom: 1px solid var(--color-text);
  }
`;
const Comment = styled.p`
  color: var(--color-gray-500);
`;
const Content = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 20px;
  word-break: break-all;
`;
const SectionTitle = styled.h4`
  color: var(--color-gray-900);
  font-weight: 700;
  padding: 20px 0;
`;
const SubTitle = styled.p`
  font-weight: 700;
`;
const Title = styled.h2`
  font-size: 5rem;
  @media (max-width: 450px) {
    font-size: 19vw;
  }
  font-weight: 700;
  line-height: 1.2;
  padding: 0;
  margin: 0;
`;
const Wrapper = styled.div`
  overflow: hidden;
  height: auto;
  width: 100vw;
`;

/**
 * Invites
 */
export default function Invites() {
  return (
    <Wrapper>
      <Header />

      <Content>
        <SectionTitle>イベント告知</SectionTitle>
        <Title>
          hey
          <br />
          Talk
          <br />
          Engineers
        </Title>
        <Spacer $size="small" />
        <SubTitle>
          新プロダクト「STORES レジ」を支えるエンジニアリング
          <br />
          <span role="img" aria-label="calender">
            📅
          </span>{" "}
          2021/8/18 (水) 19:30 ~ 21:00
        </SubTitle>
        <Spacer $size="small" />
        <A href="https://hey.connpass.com/event/219835/">申し込みはこちら</A>
        <Spacer $size="small" />
        <Comment>
          ide -
          STORESではバックエンド、フロントエンド、モバイルエンジニアを募集しています。STORESはこれまで3つの独立したサービスを運営してきましたが、レジのリリースを皮切りにプラットフォームとしてサービスを連携させた新しい価値を提供していくブランドへと進みはじめました。ぜひこのエキサイティングなタイミングで一緒にプロダクトを作る仲間を増やしたいと思っています。レジの開発について、実際に開発に携わったエンジニアの話を聞く機会があるのでぜひ気になった方はご参加ください！
        </Comment>
      </Content>

      <Spacer $size="large" />
      <Spacer $size="large" />

      <Content>
        <SectionTitle>デザイナー募集</SectionTitle>
        <Spacer $size="small" />
        <Title>よいプロダクトをつくりたい人へ</Title>
        <Spacer $size="small" />

        <p>
          STORESでデザイナーをしている<A href="https://ideyuta.com">いで</A>
          です。ネットショップの作成管理、お店のキャッシュレス決済、ネット予約管理、ネットと店舗をつないだレジといったプロダクトを作っています。ユーザーの課題と事業に向き合い、難しいトレードオフを繰り返しながら、かんたんで使いやすいプロダクトをつくることに熱意のある方と一緒に働きたいと思っています。ご興味ある方はぜひ。
        </p>
        <Spacer $size="small" />
        <A href="https://herp.careers/v1/heyinc/nNwZN6QbsTmj">応募はこちら</A>
      </Content>

      <Spacer $size="large" />
      <Spacer $size="large" />

      <Content>
        <SectionTitle>過去のイベント</SectionTitle>

        <p>
          hey designers night vol.4 | STORES レジ -
          新規プロダクト開発とデザイナーの役割{" "}
          <span role="img" aria-label="calender">
            📅
          </span>{" "}
          2021/7/28 (木) 19:30 ~ 21:00
        </p>
      </Content>

      <Spacer $size="large" />
      <Spacer $size="large" />

      <Footer />
    </Wrapper>
  );
}

export function Head() {
  return (
    <>
      <title>募集 - ideyuta.com</title>
      <meta
        name="description"
        content="こんにちは、いでです。いろんな募集をしています。"
      />
      <meta property="og:title" content="募集 - ideyuta.com" />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content="https://ideyuta.com/invites" />
      <meta
        property="og:image"
        content="https://ideyuta.com/images/invites/ogp.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_ideyuta" />
    </>
  );
}
