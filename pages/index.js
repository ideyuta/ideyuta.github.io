import React from 'react';
import Helmet from 'react-helmet';
import {config} from 'config';

const propTypes = {
  route: React.PropTypes.object
};


/**
 * Index Component
 *
 * @return {ReactElement}
 */
export default function Index() {
  return (
    <div className="Index">
      <Helmet
        meta={[
          {
            content: '',
            name: 'description'
          }
        ]}
        title={config.siteTitle}
      />
      🚧
    </div>
  );
}

Index.propTypes = propTypes;
