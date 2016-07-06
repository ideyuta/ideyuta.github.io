import React from 'react';
import Helmet from 'react-helmet';
import {config} from 'config';
import Header from '../components/Header';

const imgPath = 'http://ideyuta.com.s3.amazonaws.com/images';
const IMAGES = [
  `${imgPath}/150701master/overview01.jpg`,
  `${imgPath}/150625maito/overview02.jpg`,
  `${imgPath}/150622rebirthword/overview02.jpg`,
  `${imgPath}/150602timemachine/anime03.gif`,
  `${imgPath}/150417yui/anime01.gif`,
  `${imgPath}/150417yui/anime02.gif`,
  `${imgPath}/150417slowland/overview01.jpg`,
  `${imgPath}/150416_628/anime01.gif`,
  `${imgPath}/150416_628/anime02.gif`,
  `${imgPath}/150415ashiotorythem/anime02.gif`,
  `${imgPath}/150413kasasasu/anime01.gif`,
  `${imgPath}/150413kasasasu/anime02.gif`
];


/**
 * Index
 */
export default class Index extends React.Component {

  /**
   * constructor
   *
   * @param {Object} props - props
   */
  constructor(props) {
    super(props);
    this.state = {image: IMAGES[Math.floor(Math.random() * IMAGES.length)]};
  }

  /**
   * 画像を変更
   */
  updateImage() {
    this.setState({image: IMAGES[Math.floor(Math.random() * IMAGES.length)]});
  }

  /**
   * render
   *
   * @returns {ReactElement}
   */
  render() {
    return (
      <div
        className="Index"
        style={{backgroundImage: `url(${this.state.image})`}}
        onClick={() => this.updateImage()}
        onTouchEnd={() => this.updateImage()}
      >
        <Header />
        <Helmet
          meta={[
            {
              content: '井出優太のポートフォリオサイト。',
              name: 'description'
            }
          ]}
          title={config.siteTitle}
        />
        <div className="Index_thumb" />
      </div>
    );
  }
}
