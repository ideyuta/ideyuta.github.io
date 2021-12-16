import React from "react";
import { withPrefix } from "gatsby-link";
import styled from "styled-components";
import Gallery from "./Gallery";
import { colors } from "../assets";

const Header = styled.div`
  background: ${colors.gray900};
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: center;
  height: 14vh;
  width: 100vw;
`;
const LogoMark = styled.img`
  height: 32px;
  width: 32px;
  padding: 0 12px 0 0;
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  padding: 0 24px;
  text-decoration: none;
  color: ${colors.gray100} !important;
`;
const Wrapper = styled.div`
  background: #f2f2ee;
  height: 86vh;
  width: 100vw;
  p::selection {
    background-color: transparent;
  }
`;

class GalleryWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = { height: null }
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight })
  }

  render() {
    const { height } = this.state;
    return (
      <Wrapper style={{ height: height ? height : '100vh' }}>
        <Gallery height={height} />
        <Header style={{ height: height ? (height*0.14) : '14vh' }}>
          <Logo href={withPrefix("/")}>
            <LogoMark src="/images/logomark.png" />
            ideyuta.com
          </Logo>
        </Header>
      </Wrapper>
    );
  }
};

export default GalleryWrapper;
