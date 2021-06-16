import React from 'react';
import styled from 'styled-components';
import Spacer from './Spacer';
import { colors } from '../assets';

const A = styled.a`
  &:link { border-bottom: 1px solid #08080e; }
  &:visited { border-bottom: 1px solid #08080e; }
  &:hover { border-bottom: 1px solid #5ab87e; }
  &:active { border-bottom: 1px solid #08080e; }
`;
const Content = styled.p`
  margin: 2px 0;
`;
const Name = styled.h4`
  margin: 0;
`;
const Post = styled.p`
  margin: 0;
`;
const Photo = styled.img`
  border-radius: 1px;
  cursor: pointer;
  max-width: 130px;
  position: relative;
  transition-property: all;
  transition-duration: 0.3s;
`;
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
`;
const SectionTitle = styled.p`
  color: ${colors.gray500};
  font-size: 0.75rem;
  margin: 0;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 700px;
  margin: 0 auto;
  padding: 72px 24px;
  word-break: break-all;
`;

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type};
    console.log(props);
  }

  render() {
    const { type } = this.state;
    return (
      <Wrapper>
        <SectionTitle>プロフィール</SectionTitle>
        <Spacer size="small" />

        <PhotoWrapper>
          <Photo
            onClick={() => this.setState({ type: 'private' })}
            src="../images/profile_p.png"
            style={{
              opacity: type === 'private' ? 1 :  0.08,
              zIndex: type === 'private' ? 100 : 1,
            }}
          />
          <Photo
            onClick={() => this.setState({ type: 'work' })}
            src="../images/profile_w.png"
            style={{
              position: 'absolute',
              left: '36px',
              top: '12px',
              opacity: type === 'work' ? 1 :  0.08,
              zIndex: type === 'work' ? 100 : 1,
            }}
          />
        </PhotoWrapper>

        <Spacer size="medium" />
        <Name>井出 優太 / Yuta Ide</Name>
        <Post>デザイナー</Post>
        <Spacer size="small" />
        {type === 'private' ? (
          <>
            <Content>88年静岡県生まれ。5歳と2歳の娘がいます。料理と散歩が趣味で、おじいさんみたいに朝早くから活動しています。最近はイケてる電動自転車をかっ飛ばしています。</Content>
            <Spacer size="small" />
            <Content>
              Twitter: <A href="https://twitter.com/_ideyuta">@_ideyuta</A>
            </Content>
            <Content>
              Threads: <A href="https://instagram.com/_ideyuta">@_ideyuta</A>
            </Content>
            <Content>
              Store: <A href="https://ideyuta.stores.jp">ideyuta.store</A>
            </Content>
          </>
        ) : (
          <>
            <Content>
              88年静岡県生まれ。多摩美術大学大学院修了。カンム、ニューライト、ヘイにてデザイナーとしてプロダクトの立ち上げに従事。最近はSTORESレジを立ち上げたりデザインリードをやったりしています。
            </Content>
            <Spacer size="small" />
            <Content>
              Twitter: <A href="https://twitter.com/_ideyuta">@_ideyuta</A>
            </Content>
            <Content>
              GitHub: <A href="https://github.com/ideyuta">ideyuta</A>
            </Content>
            <Content>
              Email: <A href="mailto:ide.yuta@gmail.com">ide.yuta@gmail.com</A>
            </Content>
            <Content>
              Work: <A href="https://hey.jp">hey,inc.</A>
            </Content>
          </>
        )}
      </Wrapper>
    );
  }
}
