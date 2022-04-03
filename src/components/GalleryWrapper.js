import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import { colors } from "../assets";

const Wrapper = styled.div`
  background: ${colors.gray900};
  height: 76vh;
  width: 100vw;
  p::selection {
    background-color: transparent;
  }
`;

class GalleryWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: null };
  }

  componentDidMount() {
    let height = window.innerHeight;
    if (height) {
      height = Math.floor(height * 0.76);
    } else {
      height = "76vh";
    }
    this.setState({ height });
  }

  render() {
    const { height } = this.state;
    return (
      <Wrapper style={{ height }}>
        <Gallery height={height} />
      </Wrapper>
    );
  }
}

export default GalleryWrapper;
