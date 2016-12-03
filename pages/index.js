import React from 'react';
import Helmet from 'react-helmet';
import {config} from 'config';
import {config as nbemConfig} from 'nbem';
import Contents from '../components/Contents';
import Footer from '../components/Footer';
import Ideyuta from '../components/Ideyuta';

nbemConfig.setSeparator('_', '-');
const propTypes = {
  route: React.PropTypes.object
};


/**
 * Index
 *
 * @return {ReactElement}
 */
export default function Index() {
  return (
    <div className="Index">
      <Helmet
        meta={[
          {
            content: 'こんにちは、井出優太です。東京でデザイナーをしています。インタラクションのデザインを軸にデザインしたりコードを書いたりしています。',
            name: 'description'
          }
        ]}
        title={config.siteTitle}
      />
      <Ideyuta />
      <Contents />
      <Footer />
    </div>
  );
}

Index.propTypes = propTypes;
